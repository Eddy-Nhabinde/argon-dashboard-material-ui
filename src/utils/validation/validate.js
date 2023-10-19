import userVars from '../variables/paciente.json'
import psychoVars from '../variables/Psicologo.json'
import days from 'utils/variables/days.json'
import appVars from '../variables/appointmentFields.json'
import { ValidateParams } from './validateParams'

export function Validate(formData, resource) {

    switch (resource) {
        case 'appointment':
            for (let i = 0; i < appVars.length; i++) {
                if (appVars[i].required) {
                    if (!ValidateParams(appVars[i].valueType, formData[appVars[i].key])) {
                        return appVars[i].label
                    }
                }
            }
            return true

        case 'user':
            for (let i = 0; i < userVars.length; i++) {
                if (userVars[i].required) {
                    if (!ValidateParams(userVars[i].valueType, formData[userVars[i].key])) {
                        return userVars[i].label
                    }
                }
            }
            return true

        case 'psychologist':
            for (let i = 0; i < psychoVars.length; i++) {
                if (psychoVars[i].required) {
                    if (!ValidateParams(psychoVars[i].valueType, formData[psychoVars[i].key])) {
                        return psychoVars[i]
                    }
                }
            }

            let keys = Object.keys(formData?.disponibilidade)

            if (keys?.length == 0) {
                return 'disponibilidade'
            } else {
                for (let i = 0; i < keys.length; i++) {
                    if (!formData?.disponibilidade?.[keys[i]].inicio)
                        return `Inicio da ${days[keys[i] - 1].label}`
                    else if (formData?.disponibilidade?.[keys[i]].fim)
                        return `Fim da ${days[keys[i] - 1].label}`
                }
            }

            return true
    }
}