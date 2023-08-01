import { useEffect, useState } from "react"

export default function GetData({ data }) {
    const [dados, setDados] = useState([])
    let schedule = []

    useEffect(() => {
        data?.map((val) => {
            let date = val?.data.split("-")
            schedule.push(returnAppointments(val, date))
        })

        setDados(schedule)
    }, [data])

    function returnAppointments(value, date) {

        switch (value?.hora) {
            case "08:30":
                return {
                    problema: 'Problema ' + value.problema,
                    id: value.id,
                    psi_id: value.psicologo_id,
                    title: value.nome,
                    startDate: new Date(date[0], date[1] - 1, date[2], 8, 30),
                    endDate: new Date(date[0], date[1] - 1, date[2], 9, 50),
                }
            case "10:00":
                return {
                    problema: 'Problema ' + value.problema,
                    id: value.id,
                    psi_id: value.psicologo_id,
                    title: value.nome,
                    startDate: new Date(date[0], date[1] - 1, date[2], 10, 0),
                    endDate: new Date(date[0], date[1] - 1, date[2], 11, 20),
                }
            case "11:30":
                return {
                    problema: 'Problema ' + value.problema,
                    id: value.id,
                    psi_id: value.psicologo_id,
                    title: value.nome,
                    startDate: new Date(date[0], date[1] - 1, date[2], 11, 30),
                    endDate: new Date(date[0], date[1] - 1, date[2], 12, 50),
                }
            case "13:00":
                return {
                    problema: 'Problema ' + value.problema,
                    id: value.id,
                    psi_id: value.psicologo_id,
                    title: value.nome,
                    startDate: new Date(date[0], date[1] - 1, date[2], 13, 0),
                    endDate: new Date(date[0], date[1] - 1, date[2], 14, 20),
                }
            case "14:30":
                return {
                    problema: 'Problema ' + value.problema,
                    id: value.id,
                    psi_id: value.psicologo_id,
                    title: value.nome,
                    startDate: new Date(date[0], date[1] - 1, date[2], 14, 30),
                    endDate: new Date(date[0], date[1] - 1, date[2], 15, 50),
                }
            default:
                break;
        }
    }

    return { dados }
}