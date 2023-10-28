import { GeneralFetch } from "Api/generalFetch/generalFetch"

export function AddNewAppointment({ formData }) {
    const { FetchData, load } = GeneralFetch()

    function NewAppointment() {
        (async () => {
            await FetchData(formData, 'newAppointment', 'POST', 'appointment')
        })()
    }

    return { NewAppointment, loadAdd: load }
}