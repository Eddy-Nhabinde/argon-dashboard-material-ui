import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import { getTableHeaders } from "utils/tableData/tableHeadersAndData";
import { IconButton } from "@mui/material";
import DropDownOptions from "components/dropDown/dropDown";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Author({ name }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Time({ job }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
    </ArgonBox>
  );
}

function Actions(object, tab) {
  switch (object) {
    case "appointments":
      if (tab == 1)
        return <>
          <DropDownOptions object={object} />
        </>
      if (tab == 2)
        return <>
          <IconButton style={{ background: "#eee", marginRight: "5px", color: "#000" }} >
            <InfoOutlinedIcon />
          </IconButton>
        </>
      if (tab == 3)
        return <>
          <IconButton style={{ background: "#eee", marginRight: "5px", color: "#000" }} >
            <InfoOutlinedIcon />
          </IconButton>
        </>
    case "psychologist":
      return <>
        <DropDownOptions object={object} />
      </>
  }
}

function getRowsObject(val, object, tab) {
  switch (object) {
    case "appointments":
      return {
        paciente: <Author name={val?.paciente} />,
        hora: <Time job={val?.hora} />,
        data: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            {val?.data}
          </ArgonTypography>
        ),
        Acções: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            {Actions(object, tab)}
          </ArgonTypography>
        ),
      }
    case "psychologist":
      return {
        nome: <Author name={val?.nome} />,
        especialidade: <Time job={val?.especialidade} />,
        estado: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            {val?.estado}
          </ArgonTypography>
        ),
        Acções: (
          <ArgonTypography
            component="a"
            href="#"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            {Actions(object, tab)}
          </ArgonTypography>
        ),
      }
  }
}

function TableRowsGenerator({ data, object, tab }) {

  function getRows() {
    let rows = []

    data?.map((val) => {
      rows.push(getRowsObject(val, object, tab))
    })

    return rows
  }

  return {
    columns: getTableHeaders(object),
    rows: getRows()
  }
};

export default TableRowsGenerator;
