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

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Argon Dashboard 2 MUI base styles
import colors from "assets/theme-dark/base/colors";
import breakpoints from "assets/theme-dark/base/breakpoints";
import typography from "assets/theme-dark/base/typography";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";
import globals from "assets/theme-dark/base/globals";

// Argon Dashboard 2 MUI helper functions
import boxShadow from "assets/theme-dark/functions/boxShadow";
import hexToRgb from "assets/theme-dark/functions/hexToRgb";
import linearGradient from "assets/theme-dark/functions/linearGradient";
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

// Argon Dashboard 2 MUI components base styles for @mui material components
import sidenav from "assets/theme-dark/argonComponents/sidenav";
import list from "assets/theme-dark/argonComponents/list";
import listItem from "assets/theme-dark/argonComponents/list/listItem";
import listItemText from "assets/theme-dark/argonComponents/list/listItemText";
import card from "assets/theme-dark/argonComponents/card";
import cardMedia from "assets/theme-dark/argonComponents/card/cardMedia";
import cardContent from "assets/theme-dark/argonComponents/card/cardContent";
import button from "assets/theme-dark/argonComponents/button";
import iconButton from "assets/theme-dark/argonComponents/iconButton";
import inputBase from "assets/theme-dark/argonComponents/form/inputBase";
import menu from "assets/theme-dark/argonComponents/menu";
import menuItem from "assets/theme-dark/argonComponents/menu/menuItem";
import switchButton from "assets/theme-dark/argonComponents/form/switchButton";
import divider from "assets/theme-dark/argonComponents/divider";
import tableContainer from "assets/theme-dark/argonComponents/table/tableContainer";
import tableHead from "assets/theme-dark/argonComponents/table/tableHead";
import tableCell from "assets/theme-dark/argonComponents/table/tableCell";
import linearProgress from "assets/theme-dark/argonComponents/linearProgress";
import breadcrumbs from "assets/theme-dark/argonComponents/breadcrumbs";
import slider from "assets/theme-dark/argonComponents/slider";
import avatar from "assets/theme-dark/argonComponents/avatar";
import tooltip from "assets/theme-dark/argonComponents/tooltip";
import appBar from "assets/theme-dark/argonComponents/appBar";
import tabs from "assets/theme-dark/argonComponents/tabs";
import tab from "assets/theme-dark/argonComponents/tabs/tab";
import stepper from "assets/theme-dark/argonComponents/stepper";
import step from "assets/theme-dark/argonComponents/stepper/step";
import stepConnector from "assets/theme-dark/argonComponents/stepper/stepConnector";
import stepLabel from "assets/theme-dark/argonComponents/stepper/stepLabel";
import stepIcon from "assets/theme-dark/argonComponents/stepper/stepIcon";
import select from "assets/theme-dark/argonComponents/form/select";
import formControlLabel from "assets/theme-dark/argonComponents/form/formControlLabel";
import formLabel from "assets/theme-dark/argonComponents/form/formLabel";
import checkbox from "assets/theme-dark/argonComponents/form/checkbox";
import radio from "assets/theme-dark/argonComponents/form/radio";
import autocomplete from "assets/theme-dark/argonComponents/form/autocomplete";
import input from "assets/theme-dark/argonComponents/form/input";
import container from "assets/theme-dark/argonComponents/container";
import popover from "assets/theme-dark/argonComponents/popover";
import buttonBase from "assets/theme-dark/argonComponents/buttonBase";
import icon from "assets/theme-dark/argonComponents/icon";
import svgIcon from "assets/theme-dark/argonComponents/svgIcon";
import link from "assets/theme-dark/argonComponents/link";
import dialog from "assets/theme-dark/argonComponents/dialog";
import dialogTitle from "assets/theme-dark/argonComponents/dialog/dialogTitle";
import dialogContent from "assets/theme-dark/argonComponents/dialog/dialogContent";
import dialogContentText from "assets/theme-dark/argonComponents/dialog/dialogContentText";
import dialogActions from "assets/theme-dark/argonComponents/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
