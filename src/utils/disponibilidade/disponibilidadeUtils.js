import { useEffect, useState } from 'react'
import time from '../variables/time.json'

export function DisponibilidadeFunctions({ formData, setFormData }) {
    const [arrayTime, setArrayTime] = useState({})

    useEffect(() => {
        setArrayTime(arrayTime => ({ Inicio: getInicio(), Fim: getFim() }))
    }, [])

    const Time = [
        { "value": "1", "label": "Inicio" },
        { "value": "2", "label": "Fim" },
    ]

    const Changing = (day, checked) => {
        if (checked) {
            setFormData(formData => ({ ...formData, disponibilidade: { ...formData?.disponibilidade, [day]: {} } }))
        } else {
            let data = { ...formData }
            data.disponibilidade[day] = undefined
            setFormData(data)
        }
    }
    
    const onTimeSelected = (key, value, day) => {
        setFormData(formData => ({ ...formData, disponibilidade: { ...formData?.disponibilidade, [day]: { ...formData?.disponibilidade?.[day], [key]: value } } }))
    }

    const getInicio = () => {
        let data = []
        for (let i = 0; i < time?.length; i++)
            data.push({ value: time[i].inicio, label: time[i].inicio })
        return data
    }

    const getFim = () => {
        let data = []
        for (let i = 0; i < time?.length; i++)
            data.push({ value: time[i].fim, label: time[i].fim })
        return data
    }

    return { arrayTime, Time, Changing, onTimeSelected }
}