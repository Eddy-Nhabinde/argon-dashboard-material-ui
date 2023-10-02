import Card from "@mui/material/Card";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import Table from "argonComponents/Tables/Table";
import TableTabs from "components/tabs/tabs";
import Layout from "components/layout/mainLayout";
import { useState } from "react";
import { useEffect } from "react";
import { GeneralFetch } from "Api/generalFetch/generalFetch";
import AuthorsTableData from "./data/authorsTableData";
import { CircularProgress } from "@mui/material";

function Consultas() {
  const { FetchData, data, load } = GeneralFetch()
  const { columns, rows } = AuthorsTableData({ data });
  const [tab, setTab] = useState(1)

  useEffect(() => {
    (async () => {
      await FetchData("", 'getAppointments/' + tab, 'get', false, 'consultas')
    })()
  }, [tab])

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
                <Table columns={columns} rows={rows} />
              </ArgonBox>
            </Card>
          </ArgonBox>
        </ArgonBox>
      }
    </Layout>
  );
}

export default Consultas;
