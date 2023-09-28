import { GeneralFetch } from "Api/generalFetch/generalFetch";
import "./signUp.css"
import FormGen from "components/form/formGenerator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import appointmentFields from 'utils/variables/paciente.json'
import { useRecoilState } from "recoil";
import { Role } from "store";

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paciente: true })
    const [, setRole] = useRecoilState(Role)
    const { FetchData, data, load } = GeneralFetch()

    const onCancel = () => { navigate(-1) }

    const onConfirm = () => {
        (async () => {
            await FetchData(formData, 'saveuser', 'post', false, '')
        })()
    }

    useEffect(() => {
        if (data == 1) { navigate('/Inicio'); setRole('normal') }
    }, [data])

    return (
        <div class="formContainer">
            <div class="content">
                <header>Seja bem-vindo ao SISMACO</header>
                <FormGen load={load} formData={formData} setFormData={setFormData} fields={appointmentFields} onConfirm={onConfirm} onCancel={onCancel} />
            </div>
        </div>
    )
}