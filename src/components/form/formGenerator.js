import GenericFields from 'components/genericFields/genericFields'
import styles from './formGenerator.module.css'
import { Checkbox, FormControlLabel } from '@mui/material'
import FormButtons from 'components/formButtons/formButtons'
import { DisponibilidadeFunctions } from 'utils/disponibilidade/disponibilidadeUtils'

export default function FormGen({ load, setFormData, formData, fields, addPsy = false, onCancel, onConfirm, options = [] }) {
    const { getTime, Time, days } = DisponibilidadeFunctions()

    const onChangeInput = (key, value) => {
        setFormData(formData => ({ ...formData, [key]: value }))
    }

    function Changing(day, checked) {
        if (checked) {
            setFormData(formData => ({ ...formData, disponibilidade: { ...formData?.disponibilidade, [day]: {} } }))
        } else {
            let formDataCopy = { ...formData }
            formDataCopy.disponibilidade[day] = undefined
            setFormData(formDataCopy)
        }
    }

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
                            setFormData={setFormData}
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
                                        <FormControlLabel control={<Checkbox onChange={(e) => Changing(campo.value, e.target.checked)} style={{ fontWeight: "400" }} />} label={campo.label} />
                                        <div className={!formData?.disponibilidade?.[campo.value] && styles.disable} style={{ height: '30px', width: '90%', marginTop: '4px' }} >
                                            {Time.map((val) => {
                                                return (
                                                    <GenericFields
                                                        type={'select'}
                                                        variant={'standard'}
                                                        styles={{ marginRight: "5px", cursor: "pointer" }}
                                                        size={"middle"}
                                                        label={val.label}
                                                        day={campo.value}
                                                        designacao={val.label}
                                                        onChange={() => { alert(1) }}
                                                        options={getTime(val.label)}
                                                        formData={formData}
                                                        setFormData={setFormData}
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