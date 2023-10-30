import React from 'react';
import { Button, Result } from 'antd';

const Http403 = () => (
    <Result
        status="403"
        title="403"
        subTitle="Página nao autorizada."
        extra={<Button type="primary">Back Home</Button>}
    />
);
export default Http403;