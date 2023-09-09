import Grid from "@mui/material/Grid";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import Footer from "argonComponents/Footer";
import DetailedStatisticsCard from "argonComponents/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "argonComponents/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import PieChart from "argonComponents/Charts/PieChart";
import pieChartData from "./data/pieChart";
import Layout from "components/layout/mainLayout";

function Dashboard() {

  return (
    <Layout>
      <ArgonBox py={2.5}>
        <Grid container spacing={2.125} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Consultas Realizadas"
              count="53,000"
              icon={{ color: "success", component: <i class="fa-solid fa-check"></i> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Consultas Canceladas"
              count="2,300"
              icon={{ color: "error", component: <i class="fa-solid fa-xmark"></i> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Consultas Pendentes"
              count="+3,462"
              icon={{ color: "warning", component: <i class="fa-solid fa-calendar-days"></i> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Total"
              count="103,430"
              icon={{ color: "info", component: <i class="fa-solid fa-chart-simple"></i> }}
            />
          </Grid>
        </Grid>
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
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5} >
            <PieChart title="Sumario mensal" description={
              <ArgonBox display="flex" alignItems="center">
                <ArgonTypography variant="button" color="text" fontWeight="medium">
                  Estados das consultas marcadas nos ultimos 30 dias
                </ArgonTypography>
              </ArgonBox>
            } height="300px" chart={pieChartData} />
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
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart title="Sumario anual" description={
              <ArgonBox display="flex" alignItems="center">
                <ArgonTypography variant="button" color="text" fontWeight="medium">
                  Estados das consultas marcadas nos no ultimo ano
                </ArgonTypography>
              </ArgonBox>
            } height="300px" chart={pieChartData} />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </Layout>
  );
}

export default Dashboard;
