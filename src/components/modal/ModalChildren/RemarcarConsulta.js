import { useContext, useState } from "react"
import styles from './Remarcar.module.css'
import { Box } from "@mui/material";
// import Swal from 'sweetalert2'
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";
import Spin from 'antd/es/spin';
import { ModalState } from "store";
import { useRecoilState } from "recoil";
import AppointmentVars from '../../../utils/variables/appointmentFields.json'
import GenericFields from "components/genericFields/genericFields";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

export default function Remarcar({ psicologo, id, date, time, cId }) {
    const [FormData, setFormData] = useState({ psicologo: id, update: true, prevTime: time, prevDate: date, id: cId })

    // const { AppointmentVars, loadBusySchedules, loading, loadingProblems } = Consulta({ FormData })
    const { FetchData, load } = GeneralFetch()
    const [open, setOpen] = useRecoilState(ModalState)

    function Reschedule() {
        let newDate = new Date(FormData?.data)
        let prevDate = new Date(FormData?.prevDate)
        if (FormData.data && FormData.hora) {

            if (newDate.getDate() == prevDate.getDate() && FormData.prevTime == FormData?.hora) {
                setOpen({ open: false })
                Alert('warning', 'Escolha data ou hora diferente')
            } else {
                (async () => {
                    let response = await FetchData(FormData, 'Reschedule', 'post', false, '')
                    if (response) {
                        setOpen(null)
                    }
                })()
            }
        } else {
            Alert('warning', 'Prencha todos os dados!')
        }
    }

    function Alert(icon, msg) {
        // Swal.fire({
        //     icon: icon,
        //     title: msg,
        //     showConfirmButton: true,
        //     timer: 2500,
        //     position: 'top'
        // })
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
                            // value={value}
                            // onChange={(newValue) => onChange(newValue.$d, keyy)}
                            value={null}
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
                        placeholder="age"
                        style={{ width: "200px", height: "32px", borderRadius: "9px", marginTop: "12px" }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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