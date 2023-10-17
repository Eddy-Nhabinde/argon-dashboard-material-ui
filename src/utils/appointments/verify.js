/**
 * As funcoes que estao aqui trabalham nas verificacoes de modo a popular a lista dos psicologos de 
 * acordo com a data, hora e o problema selecionados
 */

import { GetPsychoList } from "hooks/psicologo/getPsychoList";
import { useEffect, useState } from "react";
import time from '../variables/time.json'

export function Verify({ formData }) {
    const [psicologos, setPsicolgos] = useState([])
    const { data, load } = GetPsychoList({ paging: 'false', page: 0 })


    function updateKeys(finalList) {
        for (let i = 0; i < finalList?.length; i++) {
            finalList[i]['label'] = finalList[i].nome
            finalList[i]['value'] = finalList[i].id
        }

        return finalList
    }

    function getBusySchedules() {

    }

    function filterByAvailability() {
        let dia = new Date(formData?.data)
        let filteredPsychologist = []

        for (let i = 0; i < data?.data.length; i++) {
            for (let j = 0; j < data?.data?.[i]?.disponibilidade?.length; j++)
                if (data?.data?.[i]?.disponibilidade?.[j]?.diaDaSemana == dia?.getDay()) {
                    filteredPsychologist.push(data?.data?.[i])
                    break
                }

        }
        return filteredPsychologist
    }

    function getPsychologistAvailableTime(filteredData) {
        let dia = new Date(formData?.data)
        let availableTime = []
        let insert = false

        for (let i = 0; i < filteredData.length; i++) {
            if (filteredData?.[i]?.id == formData?.psicologo) {
                for (let j = 0; j < filteredData?.[i]?.disponibilidade?.length; j++) {
                    if (filteredData?.[i]?.disponibilidade?.[j].diaDaSemana == dia.getDay()) {
                        time.map((hora) => {
                            if (hora.id == filteredData?.[i]?.disponibilidade?.[j]?.inicio) insert = true

                            if (insert) availableTime.push(hora)

                            if (hora.fim == filteredData?.[i]?.disponibilidade?.[j]?.fim) insert = false
                        })
                    }
                }
            }
            console.log(availableTime)
        }
    }

    useEffect(() => {
        let filteredData = null
        let availableTime = null

        if (formData?.data) filteredData = filterByAvailability()
        if (formData?.psicologo) availableTime = getPsychologistAvailableTime(filteredData)


        setPsicolgos(updateKeys(filteredData))
    }, [formData])

    return { psicologos }
}