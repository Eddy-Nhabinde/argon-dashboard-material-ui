import Card from "@mui/material/Card";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import Table from "argonComponents/Tables/Table";
import TableTabs from "components/tabs/tabs";
import Layout from "components/layout/mainLayout";
import { useState } from "react";
import TableRowsGenerator from "../../utils/common/TableRowsGenerator";
import { CircularProgress } from "@mui/material";
import { GetAppointments } from "hooks/appointments/getApointments";

function Consultas() {
  const [tab, setTab] = useState(1)
  const [page, setPage] = useState(1)
  const { data, load } = GetAppointments({ page, tab })
  const { columns, rows } = TableRowsGenerator({ data, object: "appointments", tab });

  return (
    <Layout>
      {load ? <div style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </div>
        :
        <ArgonBox py={3}>
          <ArgonBox mb={3}>
            <Card>
              <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <ArgonTypography variant="h6">Lista das Consultas</ArgonTypography>
                <TableTabs setTab={setTab} tab={tab} />
              </ArgonBox>
              <ArgonBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table object="appointments" columns={columns} rows={rows} setPage={setPage} data={data} page={page} />
              </ArgonBox>
            </Card>
          </ArgonBox>
        </ArgonBox>
      }
    </Layout>
  );
}

export default Consultas;
