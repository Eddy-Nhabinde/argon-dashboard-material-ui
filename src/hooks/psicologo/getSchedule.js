import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetSchedule() {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData(null, 'getSchedule', 'get', 'schedule')
        })()
    }, [])

    return { data, load }
}