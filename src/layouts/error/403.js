import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Http403 = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }} >
            <Result
                status="403"
                title="403"
                subTitle="Página nao autorizada."
                extra={<Button type="primary" onClick={() => navigate("/login")}>Iniciar sessão</Button>}
            />
        </div>
    );
}
export default Http403;