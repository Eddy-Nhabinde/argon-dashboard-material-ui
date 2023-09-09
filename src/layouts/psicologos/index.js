import authorsTableData from 'layouts/consultas/data/authorsTableData';
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import ArgonBox from 'argonComponents/ArgonBox';
import Table from 'argonComponents/Tables/Table';
import { Button } from 'antd';
import { UserAddOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Psicologo from 'utils/variables/Psicologo'
import FormGen from 'components/form/formGenerator';
import FormButtons from 'components/formButtons/formButtons';

export default function Psicologos() {
    const { columns, rows } = authorsTableData;
    const [add, setAdd] = useState(false)

    return (
        <Layout>
            <div className={styles.pageTitle}>
                <h1>Psicólogos</h1>

                {!add ?
                    <Button onClick={() => setAdd(!add)} type="default" className={styles.button} shape="round" icon={<UserAddOutlined />} size="large">
                        Novo Psicólogo
                    </Button>
                    :
                    <Button type="default" onClick={() => setAdd(!add)} className={styles.button} shape="circle" icon={<CloseOutlined />} size="large" />
                }
            </div>
            <ArgonBox>
                {
                    add ?
                        <FormGen addPsy={true} fields={Psicologo} />
                        :
                        <Table columns={columns} rows={rows} />
                }
            </ArgonBox>
        </Layout>
    )
}