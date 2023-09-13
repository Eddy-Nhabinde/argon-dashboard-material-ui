import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './Fields.module.css'
import { Radio } from 'antd';

export default function RadioButtonsGroup({ label, options, variant }) {
    // const { objectType } = useContext(ObjectType)
    // const [type, setType] = objectType

    const handleChange = (event) => {
        // setType(type => ({ ...type, objType: event.target.value }))
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
                        style={{marginLeft:"-30px"}}
                        onChange={handleChange}
                        // value={option.key}
                        optionType="button"
                        buttonStyle="solid"
                        size='middle'
                    />
            }
        </div>
    );
}
