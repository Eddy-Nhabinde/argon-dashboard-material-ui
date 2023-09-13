import GenericFields from 'components/genericFields/genericFields'
import styles from './formGenerator.module.css'
import { Checkbox, FormControlLabel } from '@mui/material'
import FormButtons from 'components/formButtons/formButtons'
import { DisponibilidadeFunctions } from 'utils/disponibilidade/disponibilidadeUtils'

export default function FormGen({ fields, addPsy = false, onCancel, onConfirm }) {
    const { getTime, Time, days } = DisponibilidadeFunctions()

    return (
        <div>
            <div className={styles.container} >
                {
                    fields.map((val) =>
                        <GenericFields
                            placeholder={val.label}
                            label={val.label}
                            type={val.type}
                            variant={val.variant || "standard"}
                            options={val?.options}
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
                                        <FormControlLabel control={<Checkbox /*onChange={(e) => Changing(campo.value, e.target.checked)}*/ style={{ fontWeight: "400" }} />} label={campo.label} />
                                        <div /*className={!formData?.disponibilidade?.[campo.value] && styles.disable}*/ style={{ height: '30px', width: '90%', marginTop: '4px' }} >
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
                                                    // formData={formData}
                                                    // setFormData={setFormData}
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
            <FormButtons onCancel={onCancel} onConfirm={onConfirm} />
        </div>
    )
}