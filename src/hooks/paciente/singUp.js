import { GeneralFetch } from "Api/generalFetch/generalFetch"

export function Regist({ formData }) {
    const { FetchData, load, data } = GeneralFetch()

    function Register() {
        (async () => {
            await FetchData(formData, 'newPatient', 'POST', 'newUser')
        })()
    }

    return { Register, load, data }
}