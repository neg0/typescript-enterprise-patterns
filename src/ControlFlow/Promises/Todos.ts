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
            let data = ''

            res.on('data', d => {
                data += d
            })

            res.on('end', () => {
                resolve(HttpResponse(statusCode, headers, data))
            })
        }).on('error', e => {
            reject(e)
        })
    })
}
