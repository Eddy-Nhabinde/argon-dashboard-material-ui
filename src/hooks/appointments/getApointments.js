import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetAppointments({ page, tab }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getAppointments/' + tab + "?page=" + page, 'get', false, 'consultas')
        })()
    }, [tab, page])

    return { data, load }
}