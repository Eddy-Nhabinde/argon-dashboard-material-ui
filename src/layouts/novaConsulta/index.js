import { Card } from "@mui/material";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import GenericFields from "components/genericFields/genericFields";
import appointmentFields from 'utils/variables/appointmentFields.json'
import styles from './index.module.css'

export default function NovaConsulta() {

    return (
        <DashboardLayout>
            <DashboardNavbar showTitle={false} />
            <Card style={{ borderRadius: "4px", marginTop: "50px" }} >
                <div className={styles.formTitle}>
                    <h1>Nova Consulta</h1>
                </div>
                <div className={styles.container} >

                    {
                        appointmentFields.map((val) =>
                            <GenericFields
                                placeholder={val.label}
                                type={val.valueType}
                                variant="standard"
                            />
                        )
                    }
                </div>
            </Card>
        </DashboardLayout>
    )
}