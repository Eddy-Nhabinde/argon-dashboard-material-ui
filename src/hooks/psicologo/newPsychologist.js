import { GeneralFetch } from "Api/generalFetch/generalFetch"

export function AddNewPsycho() {
    const { FetchData, load } = GeneralFetch()

    function NewPsycho(body, update = false) {

        console.log(update);
        (async () => {
            await FetchData(body, update ? 'updatePsycho' : 'newPsychologist', update ? "PUT" : 'POST', 'psycho')
        })()
    }

    return { NewPsycho, loadAdd: load }
}