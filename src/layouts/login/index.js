import { useEffect, useState } from 'react';
import './style.css'
import PageLayout from 'argonComponents/LayoutContainers/PageLayout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [forgot, setForgot] = useState(false)

    function back() {
        if (forgot)
            setForgot(false)
        else if (update)
            setUpdate(false)
        else
            navigate(-1)
    }

    return (
        <PageLayout>
            <div class="login">
                <div class="form">
                    <div class='head' >
                        <h2>Insira as credenciais</h2>
                        <KeyboardBackspaceIcon onClick={() => back()} class="icon" />
                    </div>
                    <div class="form-field">
                        <label for="login-mail">
                            {!update ? <i class="fa fa-user"></i>
                                : <i class="fa fa-lock"></i>}
                        </label>
                        <input id="login-mail" type={update ? "password" : "text"} name={update ? "senha" : "mail"} placeholder={update ? "Senha" : "E-Mail"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <svg>
                            <use href="#svg-check" />
                        </svg>
                    </div>
                    {
                        !forgot &&
                        <>
                            <div className='loading' ></div>
                            <div class="form-field">
                                <label for="login-password"><i class="fa fa-lock"></i></label>
                                <input id="login-password" type="password" name={update ? "CSenha" : "Senha"} placeholder={update ? "Confirme a senha" : "Senha"} pattern=".{6,}" required />
                                <svg>
                                    <use href="#svg-check" />
                                </svg>
                            </div>
                            {!update && <div class="senha">
                                <label for="login-password" onClick={() => setForgot(true)} >Esqueceu senha?</label>
                                <label for="login-password">Não tem conta? <span onClick={() => navigate("/criar_conta")} >Registar-se</span></label>
                            </div>}
                        </>
                    }
                    <button type="submit" class="button">
                        <div class="arrow-wrapper">
                            <span class="arrow"></span>
                        </div>
                        <p class="button-text" style={{ textTransform: "capitalize" }} >{forgot ? "Recuperar Senha" : update ? "Actualizar Senha" : "Entrar"}</p>
                    </button>
                </div>
            </div>
        </PageLayout>
    )
}