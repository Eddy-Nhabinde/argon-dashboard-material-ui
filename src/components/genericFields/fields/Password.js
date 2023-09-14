
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function MaskPassword({ onChange, keyy, formData }) {

    return (
        <div className="card flex justify-content-center">
            <Password style={{ borderRight: "none", borderColor: "#eee" }} value={formData[keyy]} onChange={(e) => onChange(keyy, e.target.value)} toggleMask />
        </div>
    )
}
