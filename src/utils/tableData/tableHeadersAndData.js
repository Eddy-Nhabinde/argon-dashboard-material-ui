export function getTableHeaders(object) {

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
        case 'history':
            return [
                { name: "data", align: "left" },
                { name: "hora", align: "left" },
                { name: "psicologo", align: "center" },
            ]

    }
}