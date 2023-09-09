import { Card } from "@mui/material";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import Footer from "argonComponents/Footer";

export default function Layout({ children }) {

    return (
        <DashboardLayout>
            <DashboardNavbar showTitle={false} />
            <Card style={{ borderRadius: "6px", marginTop: "80px" }} >
                {children}
            </Card>
            <Footer />
        </DashboardLayout>
    )
}