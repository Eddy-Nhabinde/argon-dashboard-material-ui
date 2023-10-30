import React from 'react';
import { Button, Result } from 'antd';

function Http404() {
    
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }} >
            <Result
                status="404"
                title="404"
                subTitle="Página não encontrada."
                extra={<Button type="primary">Voltar</Button>}
            />
        </div>
    );
}
export default Http404;