import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import FormGen from "components/form/formGenerator";
import { useEffect, useState } from 'react';
import { GetProblems } from 'hooks/appointments/getProblems';
import { Verify } from 'utils/appointments/verify';
import { Validate } from 'utils/validation/validateAppointment';
import { useRecoilState } from 'recoil';
import { AlertState } from 'store';

export default function NovaConsulta() {
    const [formData, setFormData] = useState({})
    const [options, setOptions] = useState({})
    const { psicologos, horaDisponivel } = Verify({ formData })
    const { problemsData, loadProblems } = GetProblems()
    const [alert, setAlert] = useRecoilState(AlertState)

    useEffect(() => {
        if (problemsData) setOptions(options => ({ ...options, problema: problemsData }))
    }, [problemsData])

    useEffect(() => {
        if (psicologos) setOptions(options => ({ ...options, psicologo: psicologos }))
    }, [psicologos])

    useEffect(() => {
        if (horaDisponivel) setOptions(options => ({ ...options, hora: horaDisponivel }))
    }, [horaDisponivel])

    const onCancel = () => { }

    const onConfirm = () => {
        let response = Validate(formData)
        if (response == true) console.log(11)
        else setAlert(alert => ({ ...alert, type: 'warning', msg: `O campo ${response} é obrigatório!` }))
    }

    return (
        <Layout>
            <div className={styles.formTitle}>
                <h1>Nova Consulta</h1>
            </div>
            <FormGen options={options} setFormData={setFormData} formData={formData} onConfirm={onConfirm} onCancel={onCancel} fields={appointmentFields} />
        </Layout>
    )
}