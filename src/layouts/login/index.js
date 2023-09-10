import { useEffect } from 'react';
import './style.css'
import { useArgonController, setLayout } from "context";
import PageLayout from 'argonComponents/LayoutContainers/PageLayout';

export default function Login() {
    const [, dispatch] = useArgonController();

    // useEffect(() => {
    //     setLayout(dispatch, "page");
    // }, []);

    return (
        <PageLayout>
            <div class="login">
                <div class="form">
                    <h2>Seja Ben-vindo</h2>
                    <div class="form-field">
                        <label for="login-mail"><i class="fa fa-user"></i></label>
                        <input id="login-mail" type="text" name="mail" placeholder="E-Mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <svg>
                            <use href="#svg-check" />
                        </svg>
                    </div>
                    <div className='loading' ></div>
                    <div class="form-field">
                        <label for="login-password"><i class="fa fa-lock"></i></label>
                        <input id="login-password" type="password" name="password" placeholder="Password" pattern=".{6,}" required />
                        <svg>
                            <use href="#svg-check" />
                        </svg>
                    </div>
                    <div class="senha">
                        <label for="login-password">Esqueceu senha?</label>
                    </div>
                    <button type="submit" class="button">
                        <div class="arrow-wrapper">
                            <span class="arrow"></span>
                        </div>
                        <p class="button-text">Entrar</p>
                    </button>
                </div>
            </div>
        </PageLayout>
    )
}