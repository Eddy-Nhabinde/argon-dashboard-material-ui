import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetSpecilidade({ add }) {
    const { FetchData, load, data } = GeneralFetch()

    useEffect(() => {
        if (add)
            (async () => {
                await FetchData("", `getEspecialidade`, 'get', false, 'especialidades')
            })()
    }, [add])

    return { speciality: data, loadSpeciality: load }
}