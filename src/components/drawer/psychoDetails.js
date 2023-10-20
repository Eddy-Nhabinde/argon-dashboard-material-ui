import Grid from "@mui/material/Grid";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import GradientLineChart from "argonComponents/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { CircularProgress, IconButton } from '@mui/material';
import { GetDashData } from "hooks/dashboard/getDashboardData";
import './style.css'
import { Space } from "antd";
import CloseIcon from '@mui/icons-material/Close';
import DetailedStatisticsCard from "argonComponents/Cards/StatisticsCards/DetailedStatisticsCard";
import { GenerateList } from "utils/disponibilidade/disponibilidadeList";


export default function PsychoDetails({ onClose, details }) {
    const { data, load } = GetDashData({ id: details?.data?.id })
    const style = { width: '95%', height: '100px', borderRadius: '10px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }

    function Cards({ period }) {
        let dados = null
        if (period == 'month') dados = data?.thisMonthAppointments
        else dados = data?.thisYearAppointments

        return (
            <div style={{ display: 'grid', gridTemplateColumns: '24% 24.7% 25% 26%', justifyContent: 'space-evenly', margin: '20px' }} >
                <div style={{ ...style, backgroundColor: "#11AEEF" }} >
                    <DetailedStatisticsCard
                        title="Marcadas"
                        count={dados?.[0]?.total + dados?.[1]?.total + dados?.[2]?.total || 0}
                        icon={{ color: "info", component: <i class="fa-solid fa-chart-simple"></i> }}
                    />
                </div>
                <div style={{ ...style, backgroundColor: "#FB9140" }} >
                    <DetailedStatisticsCard
                        title="Pendentes"
                        count={dados?.[0]?.total || 0}
                        icon={{ color: "warning", component: <i class="fa-solid fa-calendar-days"></i> }}
                    />
                </div>
                <div style={{ ...style, backgroundColor: '#2DCEB2' }} >
                    <DetailedStatisticsCard
                        title="Realizadas"
                        count={dados?.[2]?.total || 0}
                        icon={{ color: "success", component: <i class="fa-solid fa-check"></i> }}
                    />
                </div>
                <div style={{ ...style, backgroundColor: '#F55440' }} >
                    <DetailedStatisticsCard
                        title="Canceladas"
                        count={dados?.[1]?.total || 0}
                        icon={{ color: "error", component: <i class="fa-solid fa-xmark"></i> }}
                    />
                </div>
            </div>
        )
    }
    return (
        <>
            {load ? <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <CircularProgress />
            </div>
                :
                <div style={{ marginTop: "20px", overflowX: "hidden", }}>
                    <div style={{ width: "95%", margin: "0 0px 0 20px", background: "#DCEDF4", padding: "7px", borderRadius: "10px", color: "#677693", fontWeight: "500" }} >
                        <table style={{ width: "100%", marginLeft: "20px" }} >
                            <tr>
                                <td style={{ fontSize: "16px", color: "#888" }}>
                                    <span>Nome:</span>
                                </td>
                                <td>
                                    {details?.data?.nome}
                                </td>
                                <td style={{ fontSize: "16px", color: "#888" }}>
                                    <span>Email:</span>
                                </td>
                                <td>
                                    {details?.data?.email}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "16px", color: "#888" }}>
                                    <span>Especialidade:</span>
                                </td>
                                <td>
                                    {details?.data?.especialidade}
                                </td>
                                <td style={{ fontSize: "16px", color: "#888" }}>
                                    <span>Contacto Principal:</span>
                                </td>
                                <td>
                                    {data?.contactos?.[0]?.contacto}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontSize: "16px", color: "#888" }}>
                                    <span>Contacto Opcional:</span>
                                </td>
                                <td>
                                    {data?.contactos?.[1]?.contacto || "Não disponivel"}
                                </td>
                                <td />
                                <td />
                            </tr>
                            {
                                details?.data?.disponibilidade?.length > 0 && GenerateList(details?.data?.disponibilidade).map((val) => val)
                            }
                        </table>
                    </div>

                    <div style={{ marginTop: "20px" }} >
                        <div style={{ marginLeft: "20px" }} >
                            <ArgonTypography variant="button" color="text" fontWeight="medium">
                                Sumário dos últimos 30 dias
                            </ArgonTypography>
                        </div>
                        <Cards period={'month'} />
                        {
                            data?.thisMonthAppointments?.length > 0 &&

                            <Grid item xs={12} lg={7}>
                                <GradientLineChart
                                    title="Consultas marcadas nos últimos 30 dias"
                                    description={
                                        <ArgonBox display="flex" alignItems="center">
                                        </ArgonBox>
                                    }
                                    chart={gradientLineChartData(data?.thisMonth, 'month')}
                                />
                            </Grid>
                        }
                    </div>
                    <div style={data?.thisMonthAppointments?.length > 0 ? { marginTop: "20px" } : { marginTop: "50px" }} >
                        <div style={{ marginLeft: "20px" }} >
                            <ArgonTypography variant="button" color="text" fontWeight="medium" textAlign="center">
                                Sumário do ultimo ano
                            </ArgonTypography>
                        </div>
                        <Cards period={'year'} />
                        {
                            data?.thisYearAppointments?.length > 0 &&
                            <Grid item xs={12} lg={7}>
                                <GradientLineChart
                                    title="Consultas marcadas nos últimos 12 meses"
                                    description={
                                        <ArgonBox display="flex" alignItems="center">
                                        </ArgonBox>
                                    }
                                    chart={gradientLineChartData(data?.thisYear, 'year')}
                                />
                            </Grid>
                        }
                    </div>
                    <Space class='sair' style={{ margin: "0px 0 0 -20px" }}>
                        <IconButton onClick={onClose} aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    </Space>
                </div>
            }
        </>
    )
}