import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selects({ keyy, style, data, label, variant, formData, setFormData, day, designacao }) {

    function inputChanged(event, value) {

        // if (day) {
        //     setFormData(formData => ({
        //         ...formData,
        //         disponibilidade: {
        //             ...formData?.disponibilidade,
        //             [day]: {
        //                 ...formData?.disponibilidade[day],
        //                 [designacao]: event.target.innerText
        //             }
        //         }
        //     }))
        // } else {
        //     setFormData(formData => ({ ...formData, [keyy]: value }))
        // }
    }

    return (
        <div>
            <FormControl style={{ width: "21vw" }} size='small' >
                <InputLabel >Teste</InputLabel>
                <Select
                    value={formData?.[keyy]}
                    autoWidth
                    style={{ width: style }}
                >
                    {
                        data?.map((val) => {
                            return (
                                <MenuItem value={val.key || val.value || val.id}
                                    onClick={(event) => {
                                        inputChanged(event, val.key || val.value || val.id)
                                    }}
                                >
                                    {val.label || val.nome}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}
