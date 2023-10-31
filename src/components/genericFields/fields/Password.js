
import React from "react";
import { Password } from 'primereact/password';
import styles from './Fields.module.css'
import { useMediaQuery } from "usehooks-ts";
import variaveis from '../../../utils/variables/paciente.json'
import { FormControl, FormHelperText } from "@mui/material";

export default function MaskPassword({ onChange, keyy, formData, placeholder }) {
    const maxWidth = useMediaQuery('(max-width: 420px)')

    function getHelper() {
        if (formData?.[keyy]) {
            let field = variaveis?.filter((val) => val.key == keyy)
            return field?.[0]?.label
        }
    }

    return (
        <FormControl>
            <div className="card flex justify-content-center" style={maxWidth ? { marginTop: "-22px", marginBottom: "33px" } : {}}>
                <Password
                    className={styles.password}
                    value={formData[keyy]}
                    onChange={(e) => onChange(keyy, e.target.value)}
                    toggleMask
                    placeholder={placeholder}
                />
            </div>
            <FormHelperText style={{ marginLeft: "17px" }} >{getHelper()}</FormHelperText>
        </FormControl>
    )
}
