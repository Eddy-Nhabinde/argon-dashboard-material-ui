import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import { getTableHeaders } from "utils/tableData/tableHeadersAndData";
import { Button, Space } from 'antd';
import { IconButton } from "@mui/material";

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
          <IconButton style={{ marginRight: "5px" }} onClick={() => alert(1)} >
            <i class="material-icons">check</i>
          </IconButton>
          <IconButton style={{ marginRight: "5px" }} onClick={() => alert(1)} >
            <i class="material-icons">close</i>
          </IconButton>
          <IconButton >
            <i class="material-icons">update</i>
          </IconButton>
          <IconButton >
            <i class="material-icons">info</i>
          </IconButton>
        </>
      if (tab == 2)
        return <>
          <IconButton >
            <i class="material-icons">info</i>
          </IconButton>
        </>
      if (tab == 3)
        return <>
          <IconButton >
            <i class="material-icons">info</i>
          </IconButton>
        </>
    case "psychologist":
      return ""
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
            Edit
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
