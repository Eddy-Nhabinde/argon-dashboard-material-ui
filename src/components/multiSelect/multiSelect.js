import React, { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { GetNames } from 'hooks/psicologo/getNames';

const MultiSelect = ({value,setValue}) => {
    const [options, setOptions] = useState([]);
    const { names, loadNames } = GetNames()

    useEffect(() => {
        let data = []
        if (names)
            names?.map((val) => {
                let separacao = val?.nome?.split(" ")
                data.push({
                    label: separacao[0]?.substring(0, 1) + ". " + separacao[1],
                    value: val?.id
                });
            })

        setOptions(data)
    }, [names])

    const selectProps = {
        mode: 'multiple',
        style: {
            width: '380px'
        },
        value,
        options,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Selecione os psicólogos',
        maxTagCount: 'responsive',
    };

    return (
        <div style={{ margin: "13px 0 0 110px", display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }} >Filtrar pelos psicólogos</span>
            <Select {...selectProps} />
        </div>
    );
};
export default MultiSelect;