import { GeneralFetch } from "Api/generalFetch/generalFetch"

export function AddNewPsycho({ formData }) {
    const { FetchData, load } = GeneralFetch()

    function NewPsycho() {
        (async () => {
            await FetchData(formData, 'newPsychologist', 'POST', 'psycho')
        })()
    }

    return { NewPsycho, loadAdd: load }
}