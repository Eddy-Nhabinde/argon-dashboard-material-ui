import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import { getTableHeaders } from "utils/tableData/tableHeadersAndData";

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

function getRowsObject(val, object) {
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
            Edit
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

function TableRowsGenerator({ data, object }) {

  function getRows() {
    let rows = []

    data?.map((val) => {
      rows.push(getRowsObject(val, object))
    })

    return rows
  }

  return {
    columns: getTableHeaders(object),
    rows: getRows()
  }
};

export default TableRowsGenerator;
