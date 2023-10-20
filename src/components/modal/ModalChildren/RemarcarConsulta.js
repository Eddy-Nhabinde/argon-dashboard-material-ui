import { useContext, useState } from "react"
import styles from './Remarcar.module.css'
import { Box } from "@mui/material";
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";
import Spin from 'antd/es/spin';
import { ModalState } from "store";
import { useRecoilState } from "recoil";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AlertState } from "store";
import { Verify } from "utils/appointments/verify";

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: '61vh',
    borderRadius: '10px',
    bgcolor: '#fff',
    boxShadow: 24,
    p: 2,
};

export default function Remarcar({ id, date, time, cId }) {
    const [formData, setFormData] = useState({ psicologo: id, update: true, prevTime: time, prevDate: new Date(date), id: cId })
    const today = new Date();
    const [alert, setAlert] = useRecoilState(AlertState)
    const { horaDisponivel, getAvailabeDays } = Verify({ formData })
    const { FetchData, load } = GeneralFetch()
    const [open, setOpen] = useRecoilState(ModalState)
    let days = getAvailabeDays()

    console.log(days)

    function Reschedule() {
        let newDate = new Date(formData?.data)
        let prevDate = new Date(formData?.prevDate)

        if (formData.data && formData.hora) {
            if (newDate.getDate() == prevDate.getDate() && formData.prevTime == formData?.hora) {
                setOpen({ open: false })
                setAlert(alert => ({ ...alert, type: 'warning', msg: 'Escolha data e/ou data diferente' }))
            } else {
                (async () => {
                    let response = await FetchData(formData, 'Reschedule', 'post', false, '')
                    if (response) {
                        setOpen({ open: false })
                    }
                })()
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
            <span className={styles.span} >Remarcar consulta</span>
            <hr></hr>
            <div className={styles.form} >
                <div>
                    <InputLabel id="demo-simple-select-label" style={{ marginBottom: "7px" }}>Novo Dia</InputLabel>
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
                            renderInput={(params) => <TextField {...params} style={{ width: "200px" }} />}
                        />
                    </LocalizationProvider>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Nova hora</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        variant="outlined"
                        onChange={(newValue) => onChange('hora', newValue.target.value)}
                        placeholder="age"
                        style={{ width: "200px", height: "32px", borderRadius: "9px", marginTop: "12px" }}
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
                <button disabled={load} onClick={() => { setOpen({ open: false }) }} className={styles.button} style={!load ? { background: '#7389AE' } : {}} >
                    {
                        load ? <Spin size="small" /> :
                            <span style={{ color: 'white' }} >Voltar</span>
                    }
                </button>

                <button disabled={load} onClick={() => { Reschedule() }} className={styles.button} style={{ background: '#DF3B57' }} >
                    <span style={{ color: 'white' }} >Remarcar</span>
                </button>
            </div>
        </Box >
    )
}