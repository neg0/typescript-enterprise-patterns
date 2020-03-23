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

/**
 * Example of positive promise nest to avoid a call back pyramid
 */
export function MultipleCalls(): Promise<any> {
    return httpsGet('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // do sth with result
            return httpsGet('https://jsonplaceholder.typicode.com/posts')
        })
        .then(res => {
            // do sth with result
            return httpsGet('https://jsonplaceholder.typicode.com/comments')
        }).then(res => {
            // do sth with result
            return Promise.resolve({})
        })
}

/**
 * Using Async/Await Pattern to execute the multiple call promise
 */
export async function executeMultipleCalls(): Promise<any> {
    try {
        return await MultipleCalls()
        // ES6+: return Promise.resolve(await MultipleCalls())
    } catch (e) {
        console.error(e)
    }
}
