import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetProblems() {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData("", 'getProblems', 'get', false, 'problemas')
        })()
    }, [])

    return { problemsData: data, loadProblems: load }
}