import { GeneralFetch } from "Api/generalFetch/generalFetch"
import { useEffect } from "react"

export function GetContacts() {
    const { FetchData, data } = GeneralFetch()

    function getContacts() {
        (async () => {
            await FetchData(null, `getContacts/${sessionStorage.getItem('uId')}`, 'get', 'contactos')
        })()
    }


    return { getContacts, contacts: data }
}