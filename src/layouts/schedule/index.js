import * as React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, DayView, Appointments, Resources, AppointmentTooltip, WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
import { teal } from '@mui/material/colors';
import GetData from './data';
// import { GeneralFetch } from '../../Api/generalFetch/generalFetch';
import AgendaTitle from './AgendaTitle';
import Spiner from '../../components/Spiner/Spiner';
import { AppPoppover } from '../../components/appointmentPoppover/AppointmentPoppover';
import DashboardLayout from 'argonComponents/LayoutContainers/DashboardLayout';
import Footer from 'argonComponents/Footer';
import DashboardNavbar from 'argonComponents/Navbars/DashboardNavbar';
import Grid from "@mui/material/Grid";
import ArgonBox from 'argonComponents/ArgonBox';
import ArgonTypography from "argonComponents/ArgonTypography";
import GradientLineChart from "argonComponents/Charts/LineCharts/GradientLineChart";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import Card from "@mui/material/Card";

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#376996',
      borderRadius: '3px',
      margin: '4px'
    }}
  >
    {children}
  </Appointments.Appointment>
);

// function GetProblems() {
//     const { FetchData, data, load } = GeneralFetch()

//     React.useEffect(() => {
//         (async () => {
//             await FetchData("", 'getProblems', 'get', false, 'problemas')
//         })()
//     }, [])

//     return { problemas: data, loadingProblems: load }
// }

export default function Schedule() {
  const [dia, setDia] = React.useState()
  // const { loadingProblems, problemas } = GetProblems()
  const [problems, setProblemas] = React.useState([])
  // const { FetchData, load, data } = GeneralFetch()
  const { dados } = GetData({})

  // React.useEffect(() => {
  //     (async () => {
  //         await FetchData(null, 'getSchedule', 'get', false, 'schedule')
  //     })()
  // }, [])

  // React.useEffect(() => {
  //     let helper = []
  //     problemas?.map((p) => helper.push({ id: 'Problema ' + p.nome, text: 'Problema ' + p.nome, color: teal }))
  //     setProblemas(helper)
  // }, [problemas])

  const resources = [{
    fieldName: 'problema',
    title: 'Problema',
    instances: problems
  }];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ marginTop: "30px" }} >
        <AgendaTitle setDia={setDia} />
        <Card style={{ borderRadius: "7px", padding: "5px" }} >
          <Scheduler
            data={dados}
            height={550}
          >
            <ViewState
              defaultCurrentViewName="Week"
              currentDate={dia}
            />

            <DayView
              startDayHour={8}
              endDayHour={18}
            />

            <WeekView
              startDayHour={7}
              endDayHour={17}
              cellDuration={60}
            />

            <Appointments
              appointmentComponent={Appointment}
            />
            <Resources
              data={resources}
            />

            <AppointmentTooltip
              showCloseButton
              contentComponent={AppPoppover}
            />
          </Scheduler>
        </Card>
      </div>
      <Footer />
    </DashboardLayout>
  )
}
