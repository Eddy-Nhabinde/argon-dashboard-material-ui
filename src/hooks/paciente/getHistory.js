import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetHistory({ page, details }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        if (details?.data?.paciente_id) {
            (async () => {
                await FetchData(null, `historico/${details.data.paciente_id}?page=${page}`, 'get', 'historico')
            })()
        }
    }, [details, page])

    return { historico: data, loadHistory: load }
}