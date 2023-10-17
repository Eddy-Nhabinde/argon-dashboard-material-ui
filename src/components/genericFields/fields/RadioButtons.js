import React from 'react';
import styles from './Fields.module.css'
import { Radio } from 'antd';
import { useMediaQuery } from 'usehooks-ts';

export default function RadioButtonsGroup({ label, options, variant, keyy, onChange, formData, style }) {
    const maxWidth = useMediaQuery('(max-width: 1292px)')

    let options2 = [
        {
            "value": "m",
            "label": "M"
        },
        {
            "value": "f",
            "label": "F"
        }
    ]

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
                        options={maxWidth ? options2 : options}
                        style={maxWidth ? { marginLeft: "30px", width: "100%", ...style } : { ...style, marginLeft: "-30px" }}
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
