import { useRecoilState } from 'recoil'
import Vars from '../variables/appointmentFields.json'
import { ValidateParams } from './validateParams'

export function Validate(formData) {

    for (let i = 0; i < Vars.length; i++) {
        if (Vars[i].required) {
            if (!ValidateParams(Vars[i].valueType, formData[Vars[i].key])) {
                return  Vars[i].label
            }
        }
    }
    return true
}