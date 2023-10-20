import Grid from "@mui/material/Grid";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import GradientLineChart from "argonComponents/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { CircularProgress, IconButton } from '@mui/material';
import { GetDashData } from "hooks/dashboard/getDashboardData";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import './style.css'
import { Space } from "antd";
import CloseIcon from '@mui/icons-material/Close';


export default function PsychoDetails({ onClose, details }) {
    const { data, load } = GetDashData(details?.data?.id)
    const style = { width: '95%', height: '100px', borderRadius: '7px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }

    function Cards({ period }) {
        let dados = null
        if (period == 'month') dados = data?.thisMonthAppointments
        else dados = data?.thisYearAppointments

        return (
            <div style={{ display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', justifyContent: 'space-evenly', margin: '20px' }} >
                <div style={{ ...style, backgroundColor: "#9BA7C0" }} >
                    <NotInterestedIcon style={{ fontSize: '33px' }} />
                    <span>Marcadas</span>
                    <span style={{ fontSize: '17px' }} >{dados?.[0]?.total + dados?.[1]?.total + dados?.[2]?.total || 0}</span>
                </div>
                <div style={{ ...style, backgroundColor: "#EDE7B1" }} >
                    <ReportProblemOutlinedIcon style={{ fontSize: '33px' }} />
                    <span>Pendentes</span>
                    <span style={{ fontSize: '17px' }} >{dados?.[0]?.total || 0}</span>
                </div>
                <div style={{ ...style, backgroundColor: '#D3F8E2' }} >
                    <ThumbUpOffAltIcon style={{ fontSize: '33px' }} />
                    <span>Realizdas</span>
                    <span style={{ fontSize: '17px' }} >{dados?.[2]?.total || 0}</span>
                </div>
                <div style={{ ...style, backgroundColor: '#F694C1' }} >
                    <ThumbDownOffAltIcon style={{ fontSize: '33px' }} />
                    <span>Canceladas</span>
                    <span style={{ fontSize: '17px' }} >{dados?.[1]?.total || 0}</span>
                </div>
            </div>
        )
    }
    return (
        <div style={{ marginTop: "20px", overflowX: "hidden" }}>
            <table style={{ width: "100%", marginLeft: "20px" }} >
                <tr>
                    <td>
                        <span>Nome:</span>
                    </td>
                    <td>
                        Nome
                    </td>
                    <td>
                        <span>Email:</span>
                    </td>
                    <td>
                        Email
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Contacto:</span>
                    </td>
                    <td>
                        Nome
                    </td>
                    <td>
                        <span>Especialidade:</span>
                    </td>
                    <td>
                        Email
                    </td>
                </tr>
            </table>

            <div style={{ marginTop: "20px" }} >
                <div style={{ marginLeft: "20px" }} >
                    <ArgonTypography variant="button" color="text" fontWeight="medium">
                        Sumário dos últimos 30 dias
                    </ArgonTypography>
                </div>
                <Cards period={'month'} />
                <Grid item xs={12} lg={7}>
                    <GradientLineChart
                        title=""
                        description={
                            <ArgonBox display="flex" alignItems="center">
                            </ArgonBox>
                        }
                        chart={gradientLineChartData(data?.thisMonth, 'month')}
                    />
                </Grid>
            </div>
            <div style={{ marginTop: "20px" }} >
                <div style={{ marginLeft: "20px" }} >
                    <ArgonTypography variant="button" color="text" fontWeight="medium" textAlign="center">
                        Sumário do ultimo ano
                    </ArgonTypography>
                </div>
                <Cards period={'year'} />
                <Grid item xs={12} lg={7}>
                    <GradientLineChart
                        title=""
                        description={
                            <ArgonBox display="flex" alignItems="center">
                            </ArgonBox>
                        }
                        chart={gradientLineChartData(data?.thisYear, 'year')}
                    />
                </Grid>
            </div>
            <Space class='sair' style={{ margin: "0px 0 0 -20px" }}>
                <IconButton onClick={onClose} aria-label="delete">
                    <CloseIcon />
                </IconButton>
            </Space>
        </div>
    )
}