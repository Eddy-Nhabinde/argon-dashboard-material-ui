import { useEffect, useState } from 'react';
import './style.css'
import PageLayout from 'argonComponents/LayoutContainers/PageLayout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { GeneralFetch } from 'Api/generalFetch/generalFetch';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CircularProgress } from '@mui/material';

export default function Login() {
    const { FetchData, data, load } = GeneralFetch()
    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [forgot, setForgot] = useState(false)
    const [formData, setFormData] = useState({})

    function back() {
        if (forgot)
            setForgot(false)
        else if (update)
            setUpdate(false)
        else
            navigate(-1)
    }

    function changing(name, value) {
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    function btnEvent(endPoint) {
        (async () => {
            await FetchData(formData, endPoint, 'post', false, 'login')
        })()
    }

    useEffect(() => {
        if (data?.access_token) {
            console.log(data)
            if (data?.user?.novo == 1) {
                setUpdate(true)
                setFormData({})
            } else {
                localStorage.setItem("token", data?.access_token)
                localStorage.setItem("acesso", data?.user?.acesso)
                localStorage.setItem("email", data?.user?.email)
                localStorage.setItem("nome", data?.user?.nome.split(" ")[0])
                localStorage.setItem("apelido", data?.user?.nome.split(" ")[1])

                navigate("/Inicio")
            }
        }
    }, [data])

    return (
        <PageLayout>
            <div class="containerr" >
                <div class="login">
                    <div class="form">
                        <div class='head' >
                            <h2>
                                {forgot ? "Insira o seu email" : update ? "Actualizar Senha" : "Insira as credenciais"}
                            </h2>
                            <KeyboardBackspaceIcon onClick={() => back()} class="icon" />
                        </div>
                        <div class="form-field">
                            <label for="login-mail">
                                {!update ? <i class="fa fa-user"></i>
                                    : <i class="fa fa-lock"></i>}
                            </label>
                            <input
                                onChange={(e) => changing(e.target.name, e.target.value)}
                                id="login-mail"
                                type={update ? "password" : "text"}
                                name={update ? "senha" : "email"}
                                placeholder={update ? "Senha" : "E-Mail"}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                required
                                autoComplete="new-password"
                                value={update ? formData?.senha : formData?.email}
                            />
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
                                    <input
                                        onChange={(e) => changing(e.target.name, e.target.value)}
                                        id="login-password"
                                        type="password"
                                        name={update ? "CSenha" : "password"}
                                        value={update ? formData?.CSenha : formData?.password}
                                        placeholder={update ? "Confirme a senha" : "Senha"}
                                        pattern=".{6,}"
                                        required
                                        autoComplete="new-password"
                                    />
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
                        <button type="submit" class="button"
                            onClick={() =>
                                btnEvent(forgot ? "passwordRequest" : update ? "passwordUpdate" : "login")
                            }
                        >
                            <div class="arrow-wrapper">
                                <span class="arrow"></span>
                            </div>
                            <p class="button-text" style={{ textTransform: "capitalize" }} >
                                {
                                    load ? <CircularProgress size="25px" style={{ color: "#fff", marginTop: "15px" }} /> :
                                        forgot ? "Recuperar Senha" : update ? "Actualizar Senha" : "Entrar"
                                }
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}