import React from 'react';
import styles from './Fields.module.css'
import { Radio } from 'antd';

export default function RadioButtonsGroup({ label, options, variant, keyy, onChange, formData }) {

    const handleChange = ({ target: { value } }) => {
        onChange(keyy, value);
    };

    return (
        <div className={styles.container} style={{ marginBottom: '10px' }} >
            <label className={styles.label}>{label}:</label>
            {
                variant == "standard" ?
                    ""
                    :
                    <Radio.Group
                        options={options}
                        style={{ marginLeft: "-30px" }}
                        onChange={handleChange}
                        value={formData[keyy] || null}
                        optionType="button"
                        buttonStyle="solid"
                        size='middle'
                    />
            }
        </div>
    );
}
