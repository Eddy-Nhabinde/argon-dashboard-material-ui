import moment from "moment/moment"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from 'antd';
import * as React from 'react'
import { GeneralFetch } from "../../Api/generalFetch/generalFetch";
import styles from '../../layouts/schedule/Schedule.module.css'
import { ModalState } from "store";
import { useRecoilState } from "recoil";
import { Confirmation } from "store";

export const ScheduleOptions = ({ style, ...restProps }) => {
    const [open, setOpen] = useRecoilState(ModalState)
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)

    console.log(restProps?.appointmentData)
    function Remarcar(value) {
        setOpen(open => ({ ...open, open: true, component: 'Remarcar', data: value.startDate, hora: moment(value.startDate).format('LT').substring(0, moment(value.startDate).format('LT').length - 3), id: value.id, psiId: value.psi_id, }))
    }

    return (
        <>
            {
                restProps?.appointmentData ?
                    <div style={{ background: "#fff" }} >
                        <div className={styles.container1} >
                            <div className={styles.div} ></div>
                            <div>
                                <h1>{restProps.appointmentData.title}</h1>
                                <span>{moment(restProps.appointmentData.endDate).format('LLLL').substring(0, moment(restProps.appointmentData.endDate).format('LLLL').length - 8)}</span>
                            </div>
                        </div>
                        <div className={styles.container1} >
                            <AccessTimeIcon className={styles.icon} />
                            <div className={styles.horario} >
                                <h1>{moment(restProps.appointmentData.startDate).format('LT')} - {moment(restProps.appointmentData.endDate).format('LT')}</h1>
                            </div>
                        </div>
                        <div className={styles.container2} >
                            <div className={styles.div2} ></div>
                            <span  >{restProps.appointmentData.problema}</span>
                        </div>
                        <div style={{ margin: '7px 0 10px 0' }} >
                            <Button onClick={() => Remarcar(restProps.appointmentData)} style={{ marginLeft: '83px', backgroundColor: '#7389AE', color: '#fff' }} >Remarcar</Button>
                            <Button onClick={() => setOpenConfirm({
                                ...openConfirm,
                                body: null,
                                open: true,
                                msg: "Tem certeza que quer cancelar a consulta?",
                                operation: "cancel",
                                endpoint: 'cancelAppointment/' + restProps?.appointmentData?.id,
                                id: restProps?.appointmentData?.id,
                                method: 'PUT',
                                schedule: true
                            })} style={{ marginLeft: '10px' }} type="primary" danger>
                                Cancelar
                            </Button>
                        </div>
                    </div>
                    :
                    <div></div>
            }
        </>
    )
}
