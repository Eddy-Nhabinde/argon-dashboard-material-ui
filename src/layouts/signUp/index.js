import "./signUp.css"
import FormGen from "components/form/formGenerator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appointmentFields from 'utils/variables/paciente.json'

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({})

    const onCancel = () => {
        navigate(-1)
    }

    const onConfirm = () => {

    }

    console.log(formData)

    return (
        <div class="formContainer">
            <div class="content">
                <header>Seja bem-vindo ao SISMACO</header>
                <FormGen formData={formData} setFormData={setFormData} fields={appointmentFields} onCancel={onCancel} />
            </div>
        </div>
    )
}