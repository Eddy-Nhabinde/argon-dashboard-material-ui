import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import styles from './Fields.module.css'
import { useContext } from 'react';

export default function RadioButtonsGroup({ label, options }) {
    // const { objectType } = useContext(ObjectType)
    // const [type, setType] = objectType

    const handleChange = (event) => {
        // setType(type => ({ ...type, objType: event.target.value }))
    };


    return (
        <div className={styles.container} style={{ marginBottom: '10px' }} >
            <label className={styles.label}>{label}</label>
            <FormControl component="fieldset" style={{ marginLeft: '-25%', marginTop: '-20%' }} >
                <RadioGroup onChange={handleChange} >
                    <div className={styles.radio}>
                        {
                            options?.map((option) => {
                                return (
                                    <FormControlLabel value={option.key} control={<Radio color="primary" style={{ marginBottom: '10px' }} />} label={option.name} />
                                )
                            })
                        }
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}
