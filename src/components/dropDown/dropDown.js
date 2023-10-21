import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useEffect } from 'react';
import { Dropdown, Space } from 'antd';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { GeneralFetch } from 'Api/generalFetch/generalFetch';
import { CircularProgress } from '@mui/material';
import { Details } from 'store';
import { useRecoilState } from 'recoil';
import { ModalState } from 'store';
import { Confirmation } from 'store';

function DropDownOptions({ data, object }) {
    const { FetchData, load } = GeneralFetch()
    const [, setDetails] = useRecoilState(Details)
    const [open, setOpen] = useRecoilState(ModalState)
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)

    useEffect(() => {
        if (openConfirm?.confirmed) {
            if (openConfirm?.operation == 'cancel') {
                (async () => {
                    await FetchData(null, 'cancelAppointment/' + openConfirm?.id, 'PUT', false, 'user')
                })()
                setOpenConfirm({})
            }
        }
    }, [openConfirm])

    function Remarcar() {
        setOpen(open => ({ ...open, open: true, component: 'Remarcar', data: data.data, hora: data.hora, id: data.id, psiId: data.psicologo_id, }))
    }

    const items = [
        object == 'appointments' &&
        {
            label: <div onClick={() => setOpenConfirm({ ...openConfirm, open: true, msg: "Tem certeza que quer fechar a consulta?", operation: "close", id: data?.id })} ><DoneOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Fechar</span></div >,
            key: '0',
        },
        object == 'appointments' &&
        {
            label: <div onClick={() => Remarcar()} ><UpdateOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Remarcar</span></div>,
            key: '1',
        },
        object == 'psychologist' &&
        {
            label: <div><EditOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Editar</span></div>,
            key: '1',
        },
        {
            label: <div onClick={() => setDetails({ open: true, data: data, object: object })} ><InfoOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Detalhes</span></div>,
            key: '2',
        },
        object == 'appointments' &&
        {
            type: 'divider',
        },
        object == 'appointments' &&
        {
            label: <div onClick={() => setOpenConfirm({ ...openConfirm, open: true, msg: "Tem certeza que quer cancelar a consulta?", operation: "cancel", id: data?.id })}><CloseOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0", color: "#EE6055" }} /> <span style={{ color: "#EE6055" }} >Cancelar</span></div>,
            key: '3',
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}

            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {
                            load ? <CircularProgress size={'20px'} /> :
                                <MoreHorizIcon fontSize='medium' style={{ color: "#5B5B5B" }} />
                        }
                    </Space>
                </a>
            </Dropdown>
        </>
    )
};
export default DropDownOptions;