import React from 'react';
import { Select } from 'antd';

export default function Selects({ size = "large", keyy, style, data, label, onChange, formData }) {

    return (
        <Select
            showSearch
            placeholder={label}
            optionFilterProp="children"
            onChange={(value) => onChange(keyy, value)}
            style={{ ...style, cursor: "pointer", height: "40px" }}
            value={formData?.[keyy] || null}
            size={size}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={data}
        />
    )
}