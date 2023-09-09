import Dashboard from "layouts/dashboard";
import ArgonBox from "argonComponents/ArgonBox";
import Schedule from "layouts/schedule";
import Consultas from "layouts/consultas";
import NovaConsulta from "layouts/novaConsulta";
import Psicologos from "layouts/psicologos";

const routes = [
  {
    type: "route",
    name: "Início",
    key: "Inicio",
    route: "/Inicio",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Agenda",
    key: "agenda",
    route: "/agenda",
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
    type: "route",
    name: "Psicologos",
    key: "psicologos",
    route: '/psicologos',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-stethoscope" />,
    component: <Psicologos />,
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
