import Card from "@mui/material/Card";
import ArgonBox from "argonComponents/ArgonBox";
import ArgonTypography from "argonComponents/ArgonTypography";
import DashboardLayout from "argonComponents/LayoutContainers/DashboardLayout";
import DashboardNavbar from "argonComponents/Navbars/DashboardNavbar";
import Footer from "argonComponents/Footer";
import Table from "argonComponents/Tables/Table";
import authorsTableData from "layouts/consultas/data/authorsTableData";
import TableTabs from "components/tabs/tabs";
import Layout from "components/layout/mainLayout";

function Consultas() {
  const { columns, rows } = authorsTableData;

  return (
    <Layout>
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Authors table</ArgonTypography>
              <TableTabs />
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
    </Layout>
  );
}

export default Consultas;
