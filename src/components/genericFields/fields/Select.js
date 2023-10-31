import React from 'react';
import { Select } from 'antd';
import { FormControl, FormHelperText, useMediaQuery } from '@mui/material';

export default function Selects({ size = "large", keyy, style, data, label, onChange, formData, day = null, value }) {
    const mobile = useMediaQuery('(max-width: 420px)')
    const tablet = useMediaQuery('(max-width: 677px)')

    let estilo = { cursor: "pointer", height: "40px" }

    if (mobile && keyy == 'problema') estilo = { ...estilo, marginTop: "-21px" }
    else if (mobile && keyy == 'estadoCivil') estilo = { ...estilo, marginTop: "-21px", marginBottom: "35px" }
    else if (mobile) estilo = { ...estilo, marginTop: "10px" }

    if (tablet && keyy == 'hora') estilo = { ...estilo, marginTop: "21px" }

    return (
        <>
            <FormControl>
                <Select
                    showSearch
                    placeholder={label}
                    optionFilterProp="children"
                    onChange={(value) => onChange(keyy, value, day)}
                    style={{ ...style, ...estilo }}
                    value={value || formData?.[keyy] || null}
                    size={size}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={data}
                />
                <FormHelperText>{formData?.[keyy] && label}</FormHelperText>
            </FormControl>

        </>

    )
}