import moment from "moment/moment"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from 'antd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import * as React from 'react'
import { GeneralFetch } from "../../Api/generalFetch/generalFetch";
import styles from '../../layouts/schedule/Schedule.module.css'
import { ModalState } from "store";
import { useRecoilState } from "recoil";

export const ScheduleOptions = ({ style, ...restProps }) => {
    const { FetchData } = GeneralFetch()
    const [open, setOpen] = useRecoilState(ModalState)

    function Remarcar(value) {
        console.log(value)
        setOpen(open => ({ ...open, open: true, component: 'Remarcar', data: value.startDate, hora: moment(value.startDate).format('LT').substring(0, moment(value.startDate).format('LT').length - 3), id: value.id, psiId: value.psi_id, }))
    }

    function Cancelar(value) {
        // Swal.fire({
        //     title: 'Tem certeza?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Nao',
        //     cancelButtonText: 'Sim',
        //     position: 'top'
        // }).then((result) => {
        //     if (result.isDismissed && result.dismiss == "cancel") {
        //         (async () => {
        //             await FetchData(null, 'cancelAppointment/' + value.id, 'put', false, 'detalhes')
        //         })()
        //     }
        // })
    }

    return (
        <>
            {
                restProps?.appointmentData ?
                    <div style={{background:"#fff"}} >
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
                            <Button onClick={() => Cancelar(restProps.appointmentData)} style={{ marginLeft: '10px' }} type="primary" danger>Cancelar</Button>
                            <IconButton style={{ color: '#455a64', marginLeft: '10px', width: '40px', height: '40px' }} /*onClick={() => setSeeHistory(true)}*/ >
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
                    :
                    <div></div>
            }
        </>
    )
}
