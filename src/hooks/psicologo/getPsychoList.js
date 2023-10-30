import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { PsychoList } from "store"

export function GetPsychoList({ page, paging = 'true', debouncedValue, tab }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", `getPsychologist?page=${page}&paging=${paging}&name=${debouncedValue}&estado=${tab}`, 'get', 'consultas')
        })()
    }, [page, debouncedValue, tab])

    return { data, load }
}