import { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";
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
                <div style={{ margin: '5px 10px 0 0', display: 'flex' }} >
                    <IconButton style={{ width: '35px', height: '38px' }} onClick={() => changeWeek('prev')}>
                        <ArrowBackIosIcon style={{ fontSize: '21px', color: '#384696' }} />
                    </IconButton>
                    <IconButton style={{ width: '35px', height: '38px' }} onClick={() => changeWeek('next')}>
                        <ArrowForwardIosIcon style={{ fontSize: '21px', marginLeft: '15px', color: '#384696' }} />
                    </IconButton>
                </div>
                <h1 style={{ fontWeight: '500', fontSize: '19px', color: '#584696' }} > {firstday.clone().date()} de {months[firstday.clone().month()]} a {lastday.clone().date()} de {months[lastday.clone().month()]}</h1>
            </div>
            <Button style={{ color: '#048A81' }} type="dashed" onClick={() => changeWeek()} >Semana Actual</Button>
        </div>

    )
}