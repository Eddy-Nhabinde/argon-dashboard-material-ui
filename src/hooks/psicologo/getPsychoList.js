import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { PsychoList } from "store"

export function GetPsychoList({ page, paging = 'true' }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", `getPsychologist?page=${page}&paging=${paging}`, 'get', false, 'consultas')
        })()
    }, [page])

    return { data, load }
}