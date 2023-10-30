import { Card } from "@mui/material";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import Footer from "argonComponents/Footer";
import { HttpStatus } from "store";
import { useRecoilState } from "recoil";
import Http500 from "layouts/error/500";

export default function Layout({ children }) {
    const [status,] = useRecoilState(HttpStatus)

    return (
        <DashboardLayout>
            {status >= 300 ?
                <Card style={{ borderRadius: "6px", marginTop: "100px", padding: "10px" }} >
                    <Http500 />
                </Card>
                :
                <>
                    <DashboardNavbar showTitle={false} />
                    <Card style={{ borderRadius: "6px", marginTop: "80px", padding: "10px" }} >
                        {children}
                    </Card>
                    <Footer />
                </>
            }
        </DashboardLayout>
    )
}