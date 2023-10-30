import React from 'react';
import { Button, Result } from 'antd';

const Http500 = () => (
    <Result
        status="500"
        title="500"
        subTitle="Ocorreu um erro inesperado."
        extra={<Button type="primary" onClick={() => window.location.reload()} >Recarregar a página</Button>}
    />
);
export default Http500;