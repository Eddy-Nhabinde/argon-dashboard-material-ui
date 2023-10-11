export function getTableHeaders(object) {
    console.log(object)
    switch (object) {
        case 'appointments':
            return [
                { name: "paciente", align: "left" },
                { name: "hora", align: "left" },
                { name: "data", align: "center" },
                { name: "Acções", align: "center" },
            ]
        case 'psychologist':
            return [
                { name: "nome", align: "left" },
                { name: "especialidade", align: "left" },
                { name: "estado", align: "center" },
                { name: "Acções", align: "center" },
            ]

    }
}