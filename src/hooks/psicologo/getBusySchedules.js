import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetBusySchedules() {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData(null, 'getBusySchedules', 'get', false, 'schedule')
        })()
    }, [])

    return { busyDays: data, loadBusyDays: load }
}