import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import moment from "moment/moment";
import { Button, Space } from 'antd';

export default function AgendaTitle({ setDia }) {
    var now = moment()
    const [firstday, setFirstday] = useState(now.clone().weekday(0))
    const [lastday, setLastday] = useState(now.clone().weekday(6))
    const [date, setDate] = useState(moment((now.clone().month() + 1) + '-' + now.clone().date() + '-' + now.clone().year()))

    const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novenbro', 'Dezembro']

    useEffect(() => {
        let defdate = now.clone().year() + "-" + (now.clone().month() + 1) + "-" + now.clone().date()
        setDia(defdate);
    }, [])

    function changeWeek(op) {
        let helper = ''
        if (op == 'prev')
            helper = moment(date).subtract(7, 'days')
        else if (op == 'next')
            helper = moment(date).add(7, 'days')
        else
            helper = moment()

        let defdate = helper.clone().year() + "-" + (helper.clone().month() + 1) + "-" + helper.clone().date()
        setDate(moment((helper.clone().month() + 1) + '-' + helper.clone().date() + '-' + helper.clone().year()))
        setDia(defdate);
        setFirstday(helper.clone().weekday(0))
        setLastday(helper.clone().weekday(6))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px #464F51', }} >
            <div style={{ display: 'flex', marginBottom: '10px', marginTop: '-15px' }} >
                <div style={{ margin: '15px 10px 0 0', display: 'flex' }} >
                    <Button onClick={() => changeWeek('prev')}>
                        <ArrowBackIosIcon style={{ marginRight: '10px', marginTop: "-3px", fontSize: '21px', color: '#384696' }} />
                        <span style={{ fontWeight: "500", fontSize: "14px" }} >Anterior</span>
                    </Button>

                    <Button onClick={() => changeWeek('next')} style={{ marginLeft: "10px" }} >
                        <span style={{ fontWeight: "500", fontSize: "14px" }} >Próxima</span>
                        <ArrowForwardIosIcon style={{ fontSize: '21px', marginLeft: '10px', marginTop: "-3px", color: '#384696' }} />
                    </Button>
                </div>

                <div style={{ zIndex: "100000", background: "#fff", borderRadius: "5px", height: "31px", padding: "5px 10px 0 10px", marginTop: "15px", display: "flex" }} >
                    <span style={{ fontWeight: "bold", fontSize: "14px", marginRight: "10px" }} >Semana: </span>
                    <h1 style={{ fontWeight: '500', fontSize: '16.5px' }} > {firstday.clone().date()} de {months[firstday.clone().month()]} a {lastday.clone().date()} de {months[lastday.clone().month()]}</h1>
                </div>

                <div style={{ zIndex: "100000", background: "#fff", borderRadius: "5px", height: "31px", padding: "5px 10px 0 10px", marginTop: "15px", display: "flex", marginLeft: "15px" }} >
                    <span style={{ fontWeight: "bold", fontSize: "14px", marginRight: "15px" }} >Legenda: </span>
                    <div style={{ display: "flex" }} >
                        <div style={{ width: "13px", height: "13px", background: "#FB9140", borderRadius: "5px", marginTop: "4px" }} ></div>
                        <span style={{ fontWeight: "500", fontSize: "14px", marginLeft: "4px" }} >Pendente</span>
                    </div>
                    <div style={{ display: "flex", marginLeft: "15px" }} >
                        <div style={{ width: "13px", height: "13px", background: "#EC0B43", borderRadius: "5px", marginTop: "4px" }} ></div>
                        <span style={{ fontWeight: "500", fontSize: "14px", marginLeft: "4px" }} >Cancelada</span>
                    </div>
                    <div style={{ display: "flex", marginLeft: "15px" }} >
                        <div style={{ width: "13px", height: "13px", background: "#16DB65", borderRadius: "5px", marginTop: "4px" }} ></div>
                        <span style={{ fontWeight: "500", fontSize: "14px", marginLeft: "4px" }} >Realizada</span>
                    </div>
                </div>
            </div>
            <Button style={{ color: '#048A81' }} type="dashed" onClick={() => changeWeek()} >Semana Actual</Button>
        </div>

    )
}