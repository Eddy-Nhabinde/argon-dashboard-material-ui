import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from './Fields.module.css'
import { TextField } from "@mui/material"

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            background: "transparent"
        }
    }
}

function Input({ type, placeholder, keyy, onChange, label, value, min, max, zerar, variant }) {

    return (
        <TextField
            sx={style}
            type={type}
            variant='outlined'
            placeholder={placeholder}
            // style={{ lineHeight: '23vw' }}
            // value={formData[campos.key]}
            // helperText={helper?.[campos.key]}
            // disabled={Disable(campos.key)}
            className={styles.inputs}
            onChange={(event) => { onChange(keyy, event.target.value) }}
        />
    )
}

export default Input