import styles from './formButton.module.css'

export default function FormButtons({ onCancel, onConfirm }) {
    return (
        <div className={styles.buttonContainerRegister}>
            <button onClick={onConfirm} className={styles.button} style={{ background: '#36558F' }}>
                <span style={{ color: 'white' }} >Registar</span>
            </button>
            <button onClick={onCancel} className={styles.button} style={{ background: '#FF6B6B' }} >
                <span style={{ color: 'white' }} >Cancelar</span>
            </button>
        </div>
    )
}