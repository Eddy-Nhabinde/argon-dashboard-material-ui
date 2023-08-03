import React from 'react'
import Input from './fields/Input.js'
import Select from './fields/Select.js'
import RadioButtonsGroup from './fields/RadioButtons.js'
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DatePicker } from '@mui/x-date-pickers'


function GenericFields(props) {
    const { label, type, onChange, value, options, placeholder, styles, variant, setFormData, formData, designacao } = props

    switch (type) {
        case 'number':
            return (
                <Input
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
                <Input
                    type="password"
                    label={label}
                    defaultValue={1}
                    min={1}
                    onChange={onChange}
                    value={value}
                    variant={variant}
                />
            )

        case 'text':
            return (
                <Input
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
                    valor={value}
                    variant={variant}
                    setFormData={setFormData}
                    formData={formData}
                    designacao={designacao}
                />
            )

        case 'radio':
            return (
                <RadioButtonsGroup
                    label={label}
                    options={options}
                    onChange={onChange}
                />
            )

        case 'date':
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label={label}
                        value={value}
                        // onChange={(newValue) => onChange(newValue.$d, keyy)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
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