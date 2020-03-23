import { get } from 'https'

const HttpResponse = (statusCode: number, headers: any, data: string) => {
    return {
        statusCode: statusCode,
        headers: headers,
        data: data,
    }
}

export default function httpsGet(
    url: string,
): Promise<{ statusCode: number; headers: any; data: string }> {
    return new Promise((resolve, reject) => {
        get(url, res => {
            const { headers } = res
            const { statusCode } = res
            let data: Uint8Array[] = []

            res.on('data', d => {
                data.push(d)
            })

            res.on('end', () => {
                resolve(
                    HttpResponse(
                        statusCode,
                        headers,
                        Buffer.concat(data).toString(),
                    ),
                )
            })
        }).on('error', e => {
            reject(e)
        })
    })
}

export function MultipleCalls(): Promise<any> {
    return httpsGet('')
        .then(res => {
            return httpsGet('')
        })
        .then(res => {
            return httpsGet('')
        })
}
