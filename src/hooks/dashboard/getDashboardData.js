import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetDashData() {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getDashBoardData', 'get', false, 'dashData')
        })()
    }, [])

    return { data, load }
}