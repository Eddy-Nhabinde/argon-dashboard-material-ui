import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetHistory({ details }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        if (details?.data?.paciente_id) {
            (async () => {
                await FetchData(null, `historico/${details.data.paciente_id}`, 'get', false, 'historico')
            })()
        }
    }, [details])

    return { historico: data, loadHistory: load }
}