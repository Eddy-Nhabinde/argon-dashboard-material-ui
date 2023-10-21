import GenericFields from 'components/genericFields/genericFields'
import styles from './formGenerator.module.css'
import { Checkbox, FormControlLabel } from '@mui/material'
import FormButtons from 'components/formButtons/formButtons'
import { DisponibilidadeFunctions } from 'utils/disponibilidade/disponibilidadeUtils'
import days from '../../utils/variables/days.json'
import { AddOrEdit } from 'store'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

export default function FormGen({ load, setFormData, formData, fields, addPsy = false, onCancel, onConfirm, options = [] }) {
    const [add,] = useRecoilState(AddOrEdit)
    const { arrayTime, Time, Changing, onTimeSelected } = DisponibilidadeFunctions({ formData, setFormData })

    const onChangeInput = (key, value) => {
        setFormData(formData => ({ ...formData, [key]: value }))
    }

    useEffect(() => {
        if (add?.update == true) {
            let disponibilidade = {}
            let contacto1 = ""
            let contacto2 = ""

            add?.oldData?.disponibilidade?.map((disp) => {
                disponibilidade[disp?.diaDaSemana] = { Inicio: disp?.inicio, Fim: disp?.fim }
            })

            add?.oldData?.contactos?.map((contacto) => {
                if (contacto?.principal == 1) contacto1 = contacto?.contacto
                else contacto2 = contacto?.contacto
            })

            setFormData(formData => ({ ...add?.oldData, contacto2: contacto2, contacto1: contacto1, disponibilidade: disponibilidade, nome: add?.oldData?.nome.split(" ")[0], apelido: add?.oldData?.nome.split(" ")[1] }))
        }
    }, [add])

    console.log(formData)
    return (
        <div>
            <div className={styles.container} >
                {
                    fields.map((val) =>
                        <GenericFields
                            placeholder={val.label}
                            label={val.label}
                            type={val.type}
                            keyy={val.key}
                            variant={val.variant || "standard"}
                            options={options?.[val?.key] || val?.options}
                            onChange={onChangeInput}
                            formData={formData}
                        />
                    )
                }
            </div>

            {
                addPsy &&
                <div className={styles.DisponibilidadeContainer} >
                    <div className={styles.header}>
                        <span>Disponibilidade do Psicólogo</span>
                    </div>
                    <div className={styles.Disponibilidade} >
                        {
                            days.map((campo) => {
                                return (
                                    <div className={styles.inputs} >
                                        <FormControlLabel control={<Checkbox checked={formData?.disponibilidade?.[campo.value] || false} onChange={(e) => Changing(campo.value, e.target.checked)} style={{ fontWeight: "400" }} />} label={campo.label} />
                                        <div className={!formData?.disponibilidade?.[campo.value] && styles.disable} style={{ height: '30px', width: '90%', marginTop: '4px' }} >
                                            {Time.map((val) => {
                                                return (
                                                    <GenericFields
                                                        keyy={val.label}
                                                        type={'select'}
                                                        variant={'standard'}
                                                        styles={{ marginRight: "5px", cursor: "pointer" }}
                                                        size={"middle"}
                                                        label={val.label}
                                                        day={campo.value}
                                                        onChange={onTimeSelected}
                                                        options={arrayTime?.[val.label]}
                                                        formData={formData}
                                                        value={formData?.disponibilidade?.[campo.value]?.[val.label]}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            <FormButtons load={load} onCancel={onCancel} onConfirm={onConfirm} />
        </div>
    )
}