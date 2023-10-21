import React from 'react'
import styles from './Fields.module.css'
import { TextField, useMediaQuery } from "@mui/material"

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            background: "transparent"
        }
    }
}

function Input({ type, placeholder, keyy, onChange, formData }) {
    const maxWidth = useMediaQuery('(max-width: 420px)')

    return (
        <TextField
            sx={style}
            type={type}
            variant='outlined'
            placeholder={placeholder}
            style={maxWidth && placeholder == 'Ocupação' ? { marginTop: "-23px", marginBottom: "-30px" } : maxWidth ? { marginTop: "-23px" } : {}}
            value={formData[keyy] || null}
            // helperText={helper?.[campos.key]}
            // disabled={Disable(campos.key)}
            className={styles.inputs}
            onChange={(event) => { onChange(keyy, event.target.value) }}
        />
    )
}

export default Input