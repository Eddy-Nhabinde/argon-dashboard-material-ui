import { Card } from "@mui/material";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";

export default function NovaConsulta() {

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Card style={{ borderRadius: "7px", padding: "5px" }} >

            </Card>
        </DashboardLayout>
    )
}