import { GeneralFetch } from "Api/generalFetch/generalFetch";
import "./signUp.css"
import FormGen from "components/form/formGenerator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appointmentFields from 'utils/variables/paciente.json'

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paciente: true })
    const { FetchData, load } = GeneralFetch()

    const onCancel = () => { navigate(-1) }

    const onConfirm = () => {
        (async () => {
            await FetchData(formData, 'saveuser', 'post', false, '')
        })()
    }

    console.log(formData)

    return (
        <div class="formContainer">
            <div class="content">
                <header>Seja bem-vindo ao SISMACO</header>
                <FormGen load={load} formData={formData} setFormData={setFormData} fields={appointmentFields} onConfirm={onConfirm} onCancel={onCancel} />
            </div>
        </div>
    )
}