import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "argonComponents/Sidenav";
import theme from "assets/theme";
import routes from "routes";
import { useArgonController, setMiniSidenav } from "context";
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";
import "app.css"
import Login from "layouts/login";
import LandingPage from "layouts/landingPage/landingPage";
import SignUp from "layouts/signUp";
import Alert from "components/alert/alert";
import { CheckRole } from "utils/common/roleChecker";
import DetailsView from "components/drawer/DetailsView";
import BasicModal from "components/modal/modal";
import ConfimDialog from "components/confirmDialog/confirmDialog";
import Http404 from "layouts/error/404";

export default function App() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const { contextHolder } = Alert
  const { ConfirmContextHoldert } = ConfimDialog

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (CheckRole(route.access)) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}

      {contextHolder}
      {ConfirmContextHoldert}
      <Alert />
      <DetailsView />
      <BasicModal />
      <ConfimDialog />

      <Routes>
        {getRoutes(routes)}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/criar_conta" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Http404 />} />
      </Routes>
    </ThemeProvider>
  );
}
