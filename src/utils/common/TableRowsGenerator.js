import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import { getTableHeaders } from "utils/tableData/tableHeadersAndData";
import { IconButton } from "@mui/material";
import DropDownOptions from "components/dropDown/dropDown";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRecoilState } from "recoil";
import { Details } from "store";

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

function Actions(object, tab, data, infoClick) {
  switch (object) {
    case "appointments":
      if (tab == 1)
        return <>
          <DropDownOptions object={object} data={data} />
        </>
      if (tab == 2 || tab == 3)
        return <>
          <IconButton onClick={() => { infoClick(data) }} style={{ background: "#eee", marginRight: "5px", color: "#000" }} >
            <InfoOutlinedIcon />
          </IconButton>
        </>
    case "psychologist":
      return <>
        <DropDownOptions data={data} object={object} />
      </>
  }
}

function getRowsObject(val, object, tab, infoClick) {
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
            {Actions(object, tab, val, infoClick)}
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
            {Actions(object, tab, val, infoClick)}
          </ArgonTypography>
        ),
      }
    case "history":
      return {
        data: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            {val?.data}
          </ArgonTypography>
        ),
        hora: <Time job={val?.hora} />,
        psicologo: <Author name={val?.psicologo} />
      }
  }
}

function TableRowsGenerator({ data, object, tab }) {
  const [, setDetails] = useRecoilState(Details)

  const infoClick = (dataValue) => {
    setDetails({ open: true, data: dataValue })
  }

  function getRows() {
    let rows = []

    data?.map((val) => {
      rows.push(getRowsObject(val, object, tab, infoClick))
    })

    return rows
  }

  return {
    columns: getTableHeaders(object),
    rows: getRows()
  }
};

export default TableRowsGenerator;
