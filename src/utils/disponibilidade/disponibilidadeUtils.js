export function DisponibilidadeFunctions() {
    const days = [
        { "label": "Segunda-feira", "value": "1" },
        { "label": "Terca-feira", "value": "2" },
        { "label": "Quarta-feira", "value": "3" },
        { "label": "Quinta-feira", "value": "4" },
        { "label": "Sexta-feira", "value": "5" },
        { "label": "Segunda a sexta", "value": "0" },
    ]

    const Time = [
        { "value": "1", "label": "Inicio" },
        { "value": "2", "label": "Fim" },
    ]

    // function Changing(day, checked) {
    //     if (checked) {
    //         setFormData(formData => ({ ...formData, disponibilidade: { ...formData?.disponibilidade, [day]: {} } }))
    //     } else {
    //         let data = { ...formData }
    //         data.disponibilidade[day] = undefined
    //         setFormData(data)
    //     }
    // }

    function getTime(label) {
        switch (label) {
            case 'Inicio':
                return [
                    { "value": "1", "label": "08:30" },
                    { "value": "2", "label": "10:00" },
                    { "value": "3", "label": "11:30" },
                    { "value": "4", "label": "13:00" },
                    { "value": "5", "label": "14:30" },
                ]

            default:
                return [
                    { "value": "1", "label": "09:50" },
                    { "value": "2", "label": "11:20" },
                    { "value": "3", "label": "12:50" },
                    { "value": "4", "label": "14:20" },
                    { "value": "5", "label": "15:50" },
                ]
        }

    }

    return { getTime, Time, days }
}