import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetPsychoList({ page }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getPsychologist?page=' + page, 'get', false, 'consultas')
        })()
    }, [page])

    return { data: data?.data?.psicologos, load }
}