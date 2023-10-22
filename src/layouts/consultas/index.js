import ArgonBox from "argonComponents/ArgonBox";
import Table from "argonComponents/Tables/Table";
import TableTabs from "components/tabs/tabs";
import Layout from "components/layout/mainLayout";
import { useEffect, useState } from "react";
import TableRowsGenerator from "../../utils/common/TableRowsGenerator";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { GetAppointments } from "hooks/appointments/getApointments";
import styles from '../psicologos/index.module.css'
import GenericFields from "components/genericFields/genericFields";
import { List } from "store";
import { useRecoilState } from "recoil";

function Consultas() {
  const [tab, setTab] = useState(1)
  const [page, setPage] = useState(1)
  const [formData, setFormData] = useState({ Estado: 1 })
  const { data, load } = GetAppointments({ page, tab })
  const { columns, rows } = TableRowsGenerator({ object: "appointments", tab });
  const [, setAllData] = useRecoilState(List)

  useEffect(() => {
    setAllData(data)
  }, [data])

  useEffect(() => {
    setAllData([])
  }, [])

  const maxWidth = useMediaQuery('(max-width: 643px)')

  const onChangeInput = (key, value) => { setTab(value); setFormData({ Estado: value }) }

  return (
    <Layout>
      {load ? <div style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </div>
        :
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <div className={styles.pageTitle} >
              <h1 style={{ padding: '5px 0 4px 23px' }}>Lista das Consultas</h1>
            </div>
            {maxWidth && < GenericFields
              placeholder={'Estado'}
              label={'Estado'}
              type={'select'}
              keyy={'Estado'}
              variant={"standard"}
              options={[{ value: 1, label: "Pedentes" }, { value: 2, label: "Canceladas" }, { value: 3, label: "Realizadas" }]}
              onChange={onChangeInput}
              formData={formData}
              setFormData={setFormData}
            />}
            {!maxWidth && < TableTabs setTab={setTab} tab={tab} />}
          </div>
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
        </div>
      }
    </Layout>
  );
}

export default Consultas;
