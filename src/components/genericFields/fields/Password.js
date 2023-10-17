
import React from "react";
import { Password } from 'primereact/password';
import styles from './Fields.module.css'
import { useMediaQuery } from "usehooks-ts";

export default function MaskPassword({ onChange, keyy, formData, placeholder }) {
    const maxWidth = useMediaQuery('(max-width: 420px)')

    return (
        <div className="card flex justify-content-center" style={maxWidth ? { marginTop: "-22px", marginBottom: "33px" } : {}}        >
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
