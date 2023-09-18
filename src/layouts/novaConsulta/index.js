import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import FormGen from "components/form/formGenerator";
import { useState } from 'react';

export default function NovaConsulta() {
    const [formData, setFormData] = useState({})

    const onCancel = () => {

    }

    const onConfirm = () => {

    }

    return (
        <Layout>
            <div className={styles.formTitle}>
                <h1>Nova Consulta</h1>
            </div>
            <FormGen setFormData={setFormData} formData={formData} onConfirm={onConfirm} onCancel={onCancel} fields={appointmentFields} />
        </Layout>
    )
}