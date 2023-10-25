import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetNames() {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        (async () => {
            await FetchData(null, 'getPsychoNames', 'get', 'nomes')
        })()
    }, [])

    return { names: data, loadNames: load }
}