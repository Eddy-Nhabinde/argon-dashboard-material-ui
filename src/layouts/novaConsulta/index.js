import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import FormGen from "components/form/formGenerator";
import { useEffect, useState } from 'react';
import { GetProblems } from 'hooks/appointments/getProblems';
import { GetPsychoList } from 'hooks/psicologo/getPsychoList';

export default function NovaConsulta() {
    const [formData, setFormData] = useState({})
    const [options, setOptions] = useState({})

    const { problemsData, loadProblems } = GetProblems()
    const { data, load } = GetPsychoList({ paging: 'false' })

    useEffect(() => {
        if (problemsData) setOptions(options => ({ ...options, problema: problemsData }))
    }, [problemsData])

    const onCancel = () => { }

    const onConfirm = () => { }

    return (
        <Layout>
            <div className={styles.formTitle}>
                <h1>Nova Consulta</h1>
            </div>
            <FormGen options={options} setFormData={setFormData} formData={formData} onConfirm={onConfirm} onCancel={onCancel} fields={appointmentFields} />
        </Layout>
    )
}