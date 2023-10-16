import * as React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler, DayView, Appointments, Resources, AppointmentTooltip, WeekView
} from '@devexpress/dx-react-scheduler-material-ui';
import { teal } from '@mui/material/colors';
import GetData from './data';
import AgendaTitle from './AgendaTitle';
import DashboardLayout from 'argonComponents/LayoutContainers/DashboardLayout';
import Footer from 'argonComponents/Footer';
import DashboardNavbar from 'argonComponents/Navbars/DashboardNavbar';
import Card from "@mui/material/Card";
import { GetSchedule } from 'hooks/psicologo/getSchedule';
import { GetProblems } from 'hooks/appointments/getProblems';
import { ScheduleOptions } from 'components/scheduleOptions/scheduleOptions';
import { CircularProgress } from '@mui/material';

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

export default function Schedule() {
  const [dia, setDia] = React.useState()
  const { problemsData, loadProblems } = GetProblems()
  const [problems, setProblemas] = React.useState([])
  const { load, data } = GetSchedule()
  const { dados } = GetData({ data })

  React.useEffect(() => {
    let helper = []
    problemsData?.map((p) => helper.push({ id: 'Problema ' + p.nome, text: 'Problema ' + p.nome, color: teal }))
    setProblemas(helper)
  }, [problemsData])

  const resources = [{
    fieldName: 'problema',
    title: 'Problema',
    instances: problems
  }];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {
        load || loadProblems ?
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", width: "100%", background: "#fff" }} >
            <CircularProgress />
          </div>
          : <>
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
                    contentComponent={ScheduleOptions}
                  />
                </Scheduler>
              </Card>
            </div>
            <Footer />
          </>
      }
    </DashboardLayout>
  )
}
