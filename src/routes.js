import Dashboard from "layouts/dashboard";
import ArgonBox from "components/ArgonBox";
import Schedule from "layouts/agenda/Schedule";

const routes = [
  {
    type: "route",
    name: "Início",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    name: "Agenda",
    type: "route",
    key: "schedule",
    access: 'psi',
    route: "/schedule",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-calendar-day" />,
    Component: <Schedule />
  },
  {
    name: "Consultas",
    type: "route",
    key: "consultList",
    access: 'psi and admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-list-ul" />,
    Component: <Dashboard />
  },
  {
    name: "Nova Consulta",
    type: "route",
    key: "novaConsulta",
    access: 'paciente and admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-regular fa-calendar-plus" />,
    Component: <Dashboard />
  },
  {
    name: "Psicologos",
    type: "route",
    key: "psicologos",
    access: 'admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-stethoscope" />,
    Component: <Dashboard />
  },
  // {
  //   type: "route",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: (
  //     <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
  //   ),
  //   component: <Tables />,
  // },
  // {
  //   type: "route",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
  //   component: <Billing />,
  // },
];

export default routes;
