import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetAppointments({ page, tab, value, debouncedValue }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getAppointments/' + tab + "?page=" + page + "&ids=" + value + "&name=" + debouncedValue, 'get', 'consultas')
        })()
    }, [tab, page, value, debouncedValue])

    return { data, load }
}