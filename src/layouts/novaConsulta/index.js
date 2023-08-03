import { Card } from "@mui/material";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import GenericFields from "components/genericFields/genericFields";
import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'
import Footer from "argonComponents/Footer";

export default function NovaConsulta() {

    return (
        <DashboardLayout>
            <DashboardNavbar showTitle={false} />
            <Card style={{ borderRadius: "6px", marginTop: "80px" }} >
                <div className={styles.formTitle}>
                    <h1>Nova Consulta</h1>
                </div>
                <div className={styles.container} >
                    {
                        appointmentFields.map((val) =>
                            <GenericFields
                                placeholder={val.label}
                                label={val.label}
                                type={val.valueType}
                                variant="standard"
                            />
                        )
                    }
                </div>
                <div className={styles.buttonContainerRegister}>
                    <button className={styles.button} style={{ background: '#36558F' }}>
                        <span style={{ color: 'white' }} >Registar</span>
                    </button>
                    <button className={styles.button} style={{ background: '#FF6B6B' }} >
                        <span style={{ color: 'white' }} >Cancelar</span>
                    </button>

                </div>
            </Card>
            <Footer />
        </DashboardLayout>
    )
}