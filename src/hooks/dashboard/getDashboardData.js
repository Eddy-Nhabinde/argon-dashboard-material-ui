import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetDashData() {
    const { FetchData, load, data } = GeneralFetch()

    function getEndPoint() {
        if (sessionStorage.getItem('acesso') == 'admin') return 'getDashBoardData'
        else return 'getDashBoardData?user_id=' + sessionStorage.getItem('uId')
    }

    useEffect(() => {
        (async () => {
            await FetchData("", getEndPoint(), 'get', false, 'dashData')
        })()
    }, [])

    return { data, load }
}