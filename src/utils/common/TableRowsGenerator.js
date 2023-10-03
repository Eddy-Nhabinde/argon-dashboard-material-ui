import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";

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

function TableRowsGenerator({ data }) {

  function getRows() {
    let rows = []

    data?.map((val) => {
      rows.push(
        {
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
        },
      )
    })

    return rows
  }

  return {
    columns: [
      { name: "paciente", align: "left" },
      { name: "hora", align: "left" },
      { name: "data", align: "center" },
      { name: "Acções", align: "center" },
    ],

    rows: getRows()
  }
};

export default TableRowsGenerator;
