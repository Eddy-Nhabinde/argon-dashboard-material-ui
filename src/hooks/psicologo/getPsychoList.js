import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetPsychoList({ page, paging = 'true' }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", `getPsychologist?page=${page}&paging=${paging}`, 'get', false, 'consultas')
        })()
    }, [page])

    return { data: data?.data?.psicologos, load }
}