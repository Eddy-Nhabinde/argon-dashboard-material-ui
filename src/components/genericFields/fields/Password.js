
import React from "react";
import { Password } from 'primereact/password';
import styles from './Fields.module.css'

export default function MaskPassword({ onChange, keyy, formData, placeholder }) {

    return (
        <div className="card flex justify-content-center">
            <Password
                className={styles.password}
                value={formData[keyy]}
                onChange={(e) => onChange(keyy, e.target.value)}
                toggleMask
                placeholder={placeholder}
            />
        </div>
    )
}
