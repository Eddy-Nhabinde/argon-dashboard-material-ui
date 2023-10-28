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
import { Validate } from 'utils/validation/validate';
import { useRecoilState } from 'recoil';
import { AlertState } from 'store';
import { List } from 'store';
import { AddOrEdit } from 'store';
import { AddNewPsycho } from 'hooks/psicologo/newPsychologist';
import useDebounce from 'hooks/search/useDebounce';
import { Nothing2Show } from 'components/nothing2show/nothing2show';
import { NameFilter } from 'store';

export default function Psicologos() {
    const debouncedValue = useDebounce()
    const [add, setAdd] = useRecoilState(AddOrEdit)
    const [formData, setFormData] = useState({ acesso: 'psicologo' })
    const [page, setPage] = useState(1)
    const { data, load } = GetPsychoList({ page, debouncedValue })
    const { columns, rows } = TableRowsGenerator({ object: "psychologist" });
    const [allData, setAllData] = useRecoilState(List)
    const [options, setOptions] = useState({})
    const { speciality, loadSpeciality } = GetSpecilidade({ add })
    const [alert, setAlert] = useRecoilState(AlertState)
    const { NewPsycho, loadAdd } = AddNewPsycho({ formData })
    const [, setFilter] = useRecoilState(NameFilter)

    useEffect(() => {
        if (data?.data?.length > 0) setAllData(data?.data)
        else setAllData([])
    }, [data])

    useEffect(() => {
        setAllData([])
        setFilter("")
    }, [])

    useEffect(() => {
        if (speciality) setOptions({ especialidade: speciality })
    }, [speciality])

    const onCancel = () => {
        setAdd({ add: !add?.add })
        setFormData({ acesso: 'psicologo' })
    }

    const onConfirm = () => {
        let response = Validate(formData, 'psychologist')

        if (response == true) NewPsycho()
        else setAlert(alert => ({ ...alert, type: 'warning', msg: `O campo ${response} é obrigatório!` }))
    }

    return (
        <Layout>
            {load || loadSpeciality ? <div style={{ height: "65vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress />
            </div> :
                <>
                    <div className={styles.pageTitle}>
                        <h1>Psicólogos</h1>

                        {!add?.add ?
                            <Button onClick={() => setAdd({ add: !add?.add })} type="default" className={styles.button} shape="round" icon={<UserAddOutlined />} size="large">
                                Novo Psicólogo
                            </Button>
                            :
                            <Button style={{ paddingTop: "0px" }} type="default" onClick={() => setAdd({ add: !add?.add })} className={styles.button} shape="circle" icon={<CloseOutlined />} size="large" />
                        }
                    </div>
                    <ArgonBox>
                        {
                            add?.add ?
                                <FormGen load={loadAdd} onConfirm={onConfirm} onCancel={onCancel} setFormData={setFormData} formData={formData} addPsy={true} fields={Psicologo} options={options} />
                                :
                                <>
                                    {
                                        data?.data?.length > 0 ?
                                            <Table setPage={setPage} columns={columns} rows={rows} data={data} /> :
                                            <Nothing2Show />
                                    }
                                </>
                        }
                    </ArgonBox>
                </>
            }
        </Layout>
    )
}