import styles from './index.module.css'
import Layout from "components/layout/mainLayout";
import ArgonBox from 'argonComponents/ArgonBox';
import Table from 'argonComponents/Tables/Table';
import { Button } from 'antd';
import { UserAddOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Psicologo from 'utils/variables/Psicologo'
import FormGen from 'components/form/formGenerator';
import { CircularProgress } from '@mui/material';
import TableRowsGenerator from 'utils/common/TableRowsGenerator';
import { GetPsychoList } from 'hooks/psicologo/getPsychoList';
import { GetSpecilidade } from 'hooks/psicologo/getSpeciality';

export default function Psicologos() {
    const [add, setAdd] = useState(false)
    const [formData, setFormData] = useState({})
    const [page, setPage] = useState(1)
    const { data, load } = GetPsychoList({ page })
    const { columns, rows } = TableRowsGenerator({ data: data?.data, object: "psychologist" });
    const [options, setOptions] = useState({})
    const { speciality, loadSpeciality } = GetSpecilidade({ add })

    useEffect(() => {
        if (speciality) setOptions({ especialidade: speciality })
    }, [speciality])

    const onCancel = () => { setAdd(!add) }

    const onConfirm = () => { }

    return (
        <Layout>
            {load || loadSpeciality ? <div style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </div> :
                <>
                    <div className={styles.pageTitle}>
                        <h1>Psicólogos</h1>

                        {!add ?
                            <Button onClick={() => setAdd(!add)} type="default" className={styles.button} shape="round" icon={<UserAddOutlined />} size="large">
                                Novo Psicólogo
                            </Button>
                            :
                            <Button style={{ paddingTop: "0px" }} type="default" onClick={() => setAdd(!add)} className={styles.button} shape="circle" icon={<CloseOutlined />} size="large" />
                        }
                    </div>
                    <ArgonBox>
                        {
                            add ?
                                <FormGen onConfirm={onConfirm} onCancel={onCancel} setFormData={setFormData} formData={formData} addPsy={true} fields={Psicologo} options={options} />
                                :
                                <Table setPage={setPage} columns={columns} rows={rows} data={data} />
                        }
                    </ArgonBox>
                </>
            }
        </Layout>
    )
}