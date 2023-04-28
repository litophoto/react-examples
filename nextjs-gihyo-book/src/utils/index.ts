export const fetcher = async (
    resource: RequestInfo,
    init?: RequestInit,
): Promise<any> => {
    const response = await fetch(resource, init)

    if (!response.ok) {
        const errorRes = await response.json()
        const error = new Error(
            errorRes.message ?? 'Error is occured when client send API request.'
        )

        throw error
    }

    return response.json()
}