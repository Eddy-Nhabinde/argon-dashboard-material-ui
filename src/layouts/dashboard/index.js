import Grid from "@mui/material/Grid";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import DetailedStatisticsCard from "argonComponents/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "argonComponents/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import PieChart from "argonComponents/Charts/PieChart";
import pieChartData from "./data/pieChart";
import Layout from "components/layout/mainLayout";
import { CircularProgress } from '@mui/material';
import { GetDashData } from "hooks/dashboard/getDashboardData";

function Dashboard() {
  const { data, load } = GetDashData({})
  const style = {
    width: '96%', height: 'auto', borderRadius: '15px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: "5px 5px 5px 5px"
  }

  return (
    <Layout>
      {
        load ? <div style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center" }
        } >
          <CircularProgress />
        </div >
          : <>
            <div style={{ display: 'grid', gridTemplateColumns: '24% 24.7% 25% 26%', justifyContent: 'space-evenly', marginBottom: "20px" }} >
              <div style={{ ...style, backgroundColor: "#2DCEB2" }} >
                <DetailedStatisticsCard
                  title="Consultas Realizadas"
                  count={data?.allAppointments?.[2]?.total || 0}
                  icon={{ color: "success", component: <i class="fa-solid fa-check"></i> }}
                />
              </div>
              <div style={{ ...style, backgroundColor: "#F55440" }} >
                <DetailedStatisticsCard
                  title="Consultas Canceladas"
                  count={data?.allAppointments?.[1]?.total || 0}
                  icon={{ color: "error", component: <i class="fa-solid fa-xmark"></i> }}
                />
              </div>
              <div style={{ ...style, backgroundColor: "#FB9140" }} >
                <DetailedStatisticsCard
                  title="Consultas Pendentes"
                  count={data?.allAppointments?.[0]?.total || 0}
                  icon={{ color: "warning", component: <i class="fa-solid fa-calendar-days"></i> }}
                />
              </div>
              <div style={{ ...style, backgroundColor: "#11AEEF" }} >
                <DetailedStatisticsCard
                  title="Marcadas"
                  count={data?.allAppointments?.[0]?.total + data?.allAppointments?.[1]?.total + data?.allAppointments?.[2]?.total || 0}
                  icon={{ color: "info", component: <i class="fa-solid fa-chart-simple"></i> }}
                />
              </div>
            </div>
            <Grid container spacing={3} mb={3}>
              <Grid item xs={12} lg={7}>
                <GradientLineChart
                  title="Sumário mensal"
                  description={
                    <ArgonBox display="flex" alignItems="center">
                      <ArgonTypography variant="button" color="text" fontWeight="medium">
                        Consultas marcadas nos ultimos 30 dias
                      </ArgonTypography>
                    </ArgonBox>
                  }
                  chart={gradientLineChartData(data?.thisMonth, 'month')}
                />
              </Grid>
              <Grid item xs={12} lg={5} >
                <PieChart title="Sumário mensal" description={
                  <ArgonBox display="flex" alignItems="center">
                    <ArgonTypography variant="button" color="text" fontWeight="medium">
                      Estados das consultas marcadas nos ultimos 30 dias
                    </ArgonTypography>
                  </ArgonBox>
                } height="300px"
                  chart={pieChartData(data?.thisMonthAppointments)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={7}>
                <GradientLineChart
                  title="Sumário anual"
                  description={
                    <ArgonBox display="flex" alignItems="center">
                      <ArgonTypography variant="button" color="text" fontWeight="medium">
                        Consultas marcadas no ultimo ano
                      </ArgonTypography>
                    </ArgonBox>
                  }
                  chart={gradientLineChartData(data?.thisYear, 'year')}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <PieChart title="Sumário anual" description={
                  <ArgonBox display="flex" alignItems="center">
                    <ArgonTypography variant="button" color="text" fontWeight="medium">
                      Estados das consultas marcadas nos no ultimo ano
                    </ArgonTypography>
                  </ArgonBox>
                } height="300px"
                  chart={pieChartData(data?.thisYearAppointments)}
                />
              </Grid>
            </Grid>
          </>
      }
    </Layout >
  );
}

export default Dashboard;
