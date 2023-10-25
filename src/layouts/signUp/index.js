import { GeneralFetch } from "Api/generalFetch/generalFetch";
import "./signUp.css"
import FormGen from "components/form/formGenerator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import appointmentFields from 'utils/variables/paciente.json'
import { useRecoilState } from "recoil";
import { Role } from "store";
import { AlertState } from "store";
import { Validate } from "utils/validation/validate";
import { Regist } from "hooks/paciente/singUp";

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paciente: true, acesso: "paciente" })
    const [, setRole] = useRecoilState(Role)
    const [alert, setAlert] = useRecoilState(AlertState)
    const { Register, load, data } = Regist({ formData })

    const onCancel = () => { navigate(-1) }

    const onConfirm = () => {
        let response = Validate(formData, 'user')

        if (response == true) Register()
        else if (response == 'Data de Nascimento') {
            setAlert(alert => ({ ...alert, type: 'warning', msg: `A idade mínima permitida pelo sistema sao 18 anos!` }))
        } else {
            setAlert(alert => ({ ...alert, type: 'warning', msg: `O campo ${response} é obrigatório!` }))
        }
    }

    useEffect(() => {
        if (data == 1) { navigate('/login'); setRole('paciente') }
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