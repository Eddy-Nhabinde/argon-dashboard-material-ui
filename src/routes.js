import Dashboard from "layouts/dashboard";
import ArgonBox from "argonComponents/ArgonBox";
import Schedule from "layouts/schedule";
import Consultas from "layouts/consultas";
import NovaConsulta from "layouts/novaConsulta";
import Psicologos from "layouts/psicologos";

const routes = [
  {
    name: "Início",
    key: "inicio",
    route: "/inicio",
    access: 'psi and admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    name: "Agenda",
    key: "agenda",
    route: "/agenda",
    access: 'psi',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-calendar-day" />,
    component: <Schedule />,
  },
  {
    name: "Consultas",
    key: "consultas",
    route: "/consultas",
    access: 'all',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-list-ul" />,
    component: <Consultas />,
  },
  {
    name: "Nova Consulta",
    key: "nova-consulta",
    route: "/nova-consulta",
    access: 'admin and normal',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-regular fa-calendar-plus" />,
    component: <NovaConsulta />,
  },
  {
    name: "Psicologos",
    key: "psicologos",
    route: '/psicologos',
    access: 'admin',
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="fa-solid fa-stethoscope" />,
    component: <Psicologos />,
  },
];

export default routes;
