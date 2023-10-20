import { useMediaQuery } from "usehooks-ts"

export function GetTableHeaders(object) {
    const maxWidth = useMediaQuery('(max-width: 480px)')

    switch (object) {
        case 'appointments':
            if (maxWidth)
                return [
                    { name: "data", align: "center" },
                    { name: "hora", align: "left" },
                    { name: 'estado', align: "center" }
                ]
            else
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