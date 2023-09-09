import React from 'react';
import { Select } from 'antd';

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

export default function Selects({ size = "large", keyy, style, data, label, variant, formData, setFormData, day, designacao }) {

    return (
        <Select
            showSearch
            placeholder={label}
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            style={style}
            size={size}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={data}
        />
    )
}