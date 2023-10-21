import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetDashData({ id = null }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getDashBoardData?psicologo_id=' + id, 'get', 'dashData')
        })()
    }, [id])

    return { data, load }
}