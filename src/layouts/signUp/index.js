import "./signUp.css"
import FormGen from "components/form/formGenerator";
import { useNavigate } from "react-router-dom";
import appointmentFields from 'utils/variables/paciente.json'

export default function SignUp() {
    const navigate = useNavigate();

    function onCancel() {
        navigate(-1)
    }

    return (
        <div class="formContainer">
            <div class="content">
                <header>Seja bem-vindo ao SISMACO</header>
                <FormGen fields={appointmentFields} onCancel={onCancel} />
            </div>
        </div>
    )
}