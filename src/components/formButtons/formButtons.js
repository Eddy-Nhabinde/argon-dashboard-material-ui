import styles from './formButton.module.css'

export default function FormButtons() {
    return (
        <div className={styles.buttonContainerRegister}>
            <button className={styles.button} style={{ background: '#36558F' }}>
                <span style={{ color: 'white' }} >Registar</span>
            </button>
            <button className={styles.button} style={{ background: '#FF6B6B' }} >
                <span style={{ color: 'white' }} >Cancelar</span>
            </button>
        </div>
    )
}