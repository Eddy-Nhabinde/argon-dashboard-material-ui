import styles from './formButton.module.css'
import { CircularProgress, useMediaQuery } from '@mui/material';

export default function FormButtons({ load, onCancel, onConfirm }) {
    const maxWidth = useMediaQuery('(max-width: 420px)')

    return (
        <div className={maxWidth ? styles.buttonContainerRegister400px : styles.buttonContainerRegister}>
            <button disabled={load} onClick={onConfirm} className={styles.button} style={{ background: '#36558F' }}>
                {load ? <CircularProgress size="17px" style={{ color: "#fff" }} /> : <span style={{ color: 'white' }} >Registar</span>}
            </button>
            <button disabled={load} onClick={onCancel} className={styles.button} style={{ background: '#FF6B6B' }} >
                <span style={{ color: 'white' }} >Cancelar</span>
            </button>
        </div>
    )
}