import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import FormGen from "components/form/formGenerator";
import { useEffect, useState } from 'react';
import { GetProblems } from 'hooks/appointments/getProblems';
import { Verify } from 'utils/appointments/verify';
import { useRecoilState } from 'recoil';
import { AlertState } from 'store';
import { Validate } from 'utils/validation/validate';
import { AddNewAppointment } from 'hooks/appointments/newAppointment';
import { GetContacts } from 'hooks/paciente/getContacts';

export default function NovaConsulta() {
    const [formData, setFormData] = useState({})
    const [options, setOptions] = useState({})
    const { psicologos, horaDisponivel } = Verify({ formData })
    const { problemsData } = GetProblems()
    const [alert, setAlert] = useRecoilState(AlertState)
    const { NewAppointment, loadAdd } = AddNewAppointment({ formData })
    const { getContacts, contacts } = GetContacts()

    useEffect(() => {
        if (sessionStorage.getItem('acesso') == "paciente") {
            getContacts()
            setFormData({
                nome: sessionStorage.getItem('nome'),
                apelido: sessionStorage.getItem('apelido'),
                email: sessionStorage.getItem('email')
            })
        }
    }, [])

    useEffect(() => {
        contacts?.map((val) => {
            if (val?.principal == 1)
                setFormData(formData => ({ ...formData, contacto1: val?.contacto }))
            else if (val?.principal == 0)
                setFormData(formData => ({ ...formData, contacto2: val?.contacto }))
        })
    }, [contacts])

    useEffect(() => {
        if (problemsData) setOptions(options => ({ ...options, problema: problemsData }))
    }, [problemsData])

    useEffect(() => {
        if (psicologos) setOptions(options => ({ ...options, psicologo: psicologos }))
    }, [psicologos])

    useEffect(() => {
        if (horaDisponivel) setOptions(options => ({ ...options, hora: horaDisponivel }))
    }, [horaDisponivel])

    const onCancel = () => { setFormData({}) }

    const onConfirm = () => {
        let response = Validate(formData, 'appointment')

        if (response == true) NewAppointment()
        else setAlert(alert => ({ ...alert, type: 'warning', msg: `O campo ${response} é obrigatório!` }))
    }

    return (
        <Layout>
            <div className={styles.formTitle}>
                <h1>Nova Consulta</h1>
            </div>
            <FormGen load={loadAdd} options={options} setFormData={setFormData} formData={formData} onConfirm={onConfirm} onCancel={onCancel} fields={appointmentFields} />
        </Layout>
    )
}