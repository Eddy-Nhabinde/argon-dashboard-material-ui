/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Argon Dashboard 2 MUI components
import ArgonBox from "argonComponents/ArgonBox";

// Argon Dashboard 2 MUI context
import { useArgonController, setLayout } from "context";

function DashboardLayout({ bgColor, children, ...rest }) {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <ArgonBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      <ArgonBox
        bgColor={'#009a00'}
        height="300px"
        width="100vw"
        position="fixed"
        top={0}
        left={0}
        {...rest}
      />
      <div >
        {children}
      </div>
    </ArgonBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
