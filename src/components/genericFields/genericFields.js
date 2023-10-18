import React from 'react'
import Input from './fields/Input.js'
import Select from './fields/Select.js'
import RadioButtonsGroup from './fields/RadioButtons.js'
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DatePicker } from 'antd';
import MaskPassword from './fields/Password.js';
import { useMediaQuery } from '@mui/material';


function GenericFields(props) {
    const maxWidth = useMediaQuery('(max-width: 420px)')

    const { keyy, size, label, type, onChange, value, options, placeholder, styles, variant, setFormData, formData, designacao } = props

    switch (type) {
        case 'number':
            return (
                <Input
                    keyy={keyy}
                    type="number"
                    label={label}
                    defaultValue={1}
                    min={1}
                    onChange={onChange}
                    value={value}
                    variant={variant}
                />
            )

        case 'password':
            return (
                <MaskPassword
                    keyy={keyy}
                    onChange={onChange}
                    variant={variant}
                    formData={formData}
                    placeholder={placeholder}

                />
            )

        case 'text':
            return (
                <Input
                    keyy={keyy}
                    type="text"
                    label={label}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    variant={variant}
                />
            )

        case 'select':
            return (
                <Select
                    label={label}
                    style={styles}
                    data={options}
                    formData={formData}
                    designacao={designacao}
                    size={size}
                    onChange={onChange}
                    keyy={keyy}
                />
            )

        case 'radio':

            return (
                <div style={maxWidth ? { marginTop: "10px", marginBottom: "25px" } : {}} >
                    <RadioButtonsGroup
                        label={label}
                        options={options}
                        onChange={onChange}
                        variant={variant}
                        keyy={keyy}
                        formData={formData}
                    />
                </div>
            )

        case 'date':
            let style = { height: "40px", }
            if (maxWidth) style = { height: "40px", marginTop: "10px" }

            return (
                <DatePicker
                    style={style}
                    onChange={(e) => { onChange(keyy, e?.$d) }}
                    placeholder={placeholder}
                />
            )

        case 'dateTime':
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label={label}
                        value={value}
                        renderInput={(params) => <TextField {...params} style={{ width: styles }} />}
                    />
                </LocalizationProvider>
            )

        case 'time':
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileTimePicker />
                </LocalizationProvider>
            )
        default: return null
    }
}

export default GenericFields