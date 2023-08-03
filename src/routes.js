import Dashboard from "layouts/dashboard";
import ArgonBox from "argonComponents/ArgonBox";
import Schedule from "layouts/schedule";
import Consultas from "layouts/consultas";
import NovaConsulta from "layouts/novaConsulta";

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
    type: "route",
    name: "Schedule",
    key: "agenda",
    route: "/schedule",
    access: 'psi and admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-calendar-day" />,
    component: <Schedule />,
  },
  {
    type: "route",
    name: "Consultas",
    key: "consultas",
    route: "/consultas",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-list-ul" />,
    component: <Consultas />,
  },
  {
    type: "route",
    name: "Nova Consulta",
    key: "nova-consulta",
    route: "/nova-consulta",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-regular fa-calendar-plus" />,
    component: <NovaConsulta />,
  },
  {
    name: "Psicologos",
    type: "route",
    key: "psicologos",
    access: 'admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-stethoscope" />,
    component: <Consultas />,
  },

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
