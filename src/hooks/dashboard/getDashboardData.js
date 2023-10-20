import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetDashData({ id }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getDashBoardData?psicologo_id=' + id, 'get', false, 'dashData')
        })()
    }, [id])

    return { data, load }
}