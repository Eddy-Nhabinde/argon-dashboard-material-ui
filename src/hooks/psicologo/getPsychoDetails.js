import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetPsychoDetails({ details }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        if (details?.data?.psicologo_id) {
            (async () => {
                await FetchData(null, `getPsiDetails/${details.data.psicologo_id}`, 'get', false, 'psicologo')
            })()
        }
    }, [details])

    return { psicologo: data, loadPsycho: load }
}