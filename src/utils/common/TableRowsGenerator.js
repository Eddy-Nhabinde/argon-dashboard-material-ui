import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import { GetTableHeaders } from "utils/table/tableHeaders";
import { IconButton } from "@mui/material";
import DropDownOptions from "components/dropDown/dropDown";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRecoilState } from "recoil";
import { Details } from "store";
import { useEffect, useState } from "react";
import { List } from "store";

function Author({ name }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium" color="text">
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
          <IconButton style={{ marginRight: "5px" }} >
            <InfoOutlinedIcon onClick={() => { infoClick(data) }} />
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
        id: val?.id,
        paciente: <Author name={val?.paciente} />,
        psicólogo: <Author name={val?.psicologo} />,
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
        estado: (
          <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
            {val?.estado}
          </ArgonTypography>
        ),
      }
    case "psychologist":
      return {
        id: val?.id,
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
        id: val?.id,
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

function TableRowsGenerator({ object, tab }) {
  const [, setDetails] = useRecoilState(Details)
  const [rows, setRows] = useState([])
  const [allData,] = useRecoilState(List)

  const infoClick = (dataValue) => {
    setDetails({ open: true, data: dataValue })
  }

  useEffect(() => {
    if (allData?.length > 0) {
      let TableRows = []

      allData?.map((val) => {
        TableRows.push(getRowsObject(val, object, tab, infoClick))
      })
      setRows(TableRows)
    } else setRows([])
  }, [allData])


  return {
    columns: GetTableHeaders(object),
    rows
  }
};

export default TableRowsGenerator;
