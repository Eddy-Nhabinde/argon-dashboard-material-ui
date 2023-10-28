import { useState } from "react"
import styles from './Remarcar.module.css'
import { Box, useMediaQuery } from "@mui/material";
import { ModalState } from "store";
import { useRecoilState } from "recoil";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AlertState } from "store";
import { Verify } from "utils/appointments/verify";
import { Confirmation } from "store";
import moment from "moment";

export default function Remarcar({ segmento, id, date, time, cId }) {
    const [formData, setFormData] = useState({ psicologo: id, segmento: segmento, update: true, prevTime: time, prevDate: new Date(date), id: cId })
    const today = new Date();
    const [alert, setAlert] = useRecoilState(AlertState)
    const { horaDisponivel, getAvailabeDays } = Verify({ formData })
    const [open, setOpen] = useRecoilState(ModalState)
    let days = getAvailabeDays()
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)
    const maxWidth = useMediaQuery('(max-width: 520px)')

    const style = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: maxWidth ? '96vw' : 500,
        maxHeight: '61vh',
        borderRadius: '10px',
        bgcolor: '#fff',
        boxShadow: 24,
        p: 2,
    };

    const width = maxWidth ? '42vw' : 200

    function Reschedule() {
        let newDate = new Date(formData?.data)
        let prevDate = new Date(formData?.prevDate)

        if (formData.data && formData.hora) {
            if (newDate.getDate() == prevDate.getDate()) {
                setOpen({ open: false })
                if (segmento) {
                    setAlert(alert => ({ ...alert, type: 'warning', msg: 'Escolha uma data diferente' }))
                } else if (formData.prevTime == formData?.hora) {
                    setAlert(alert => ({ ...alert, type: 'warning', msg: 'Escolha uma data e/ou hora diferente' }))
                }
            } else {
                setOpen({ open: false })
                setOpenConfirm({
                    ...openConfirm,
                    open: true,
                    msg: "Tem certeza que deseja marcar a consulta para dia " + moment(formData.data).format('L') + " as " + formData.hora + " ?",
                    operation: "close",
                    endpoint: 'Reschedule',
                    method: 'POST',
                    body: formData,
                    id: cId,
                    operation: "reschedule"
                })
            }
        } else {
            setOpen({ open: false })
            setAlert(alert => ({ ...alert, type: 'warning', msg: 'Por favor preencha todos os campos.' }))
        }
    }

    const onChange = (key, e) => {
        setFormData(formData => ({ ...formData, [key]: e }))
    }

    return (
        <Box sx={style}>
            <span className={styles.span} >
                {segmento ? "Consulta de Segmento"
                    : 'Remarcar consulta'
                }
            </span>
            <hr></hr>
            <div className={styles.form} >
                <div>
                    <InputLabel id="demo-simple-select-label" style={{ marginBottom: "7px" }}>
                        {segmento ? "Data" :
                            'Novo Data'}
                    </InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            shouldDisableDate={(dateParam) => {
                                let data = new Date(dateParam)
                                for (let i = 0; i < days?.length; i++)
                                    if (days[i] == data?.getDay()) return false

                                return true
                            }}
                            value={formData?.data || null}
                            onChange={(newValue) => onChange('data', newValue.$d)}
                            minDate={today}
                            renderInput={(params) => <TextField {...params} style={{ width: width }} />}
                        />
                    </LocalizationProvider>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">
                        {segmento ? "Hora" :
                            'Nova hora'}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        variant="outlined"
                        onChange={(newValue) => onChange('hora', newValue.target.value)}
                        placeholder="age"
                        style={{ width: width, height: "32px", borderRadius: "9px", marginTop: "12px" }}
                    >
                        {
                            horaDisponivel?.map((val) =>
                                <MenuItem value={val?.value}>{val.label}</MenuItem>
                            )
                        }
                    </Select>
                </div>
            </div>
            <div className={styles.btnCont} >
                <button onClick={() => { setOpen({ open: false }) }} className={styles.button} style={{ background: '#7389AE', textTransform: "capitalize" }} >
                    <span style={{ color: 'white' }} >Cancelar</span>
                </button>

                <button onClick={() => { Reschedule() }} className={styles.button} style={{ background: '#DF3B57', textTransform: "capitalize" }} >
                    <span style={{ color: 'white' }} >
                        {segmento ? "Marcar" :
                            'Remarcar'}
                    </span>
                </button>
            </div>
        </Box >
    )
}