import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
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

function DropDownOptions({ data, object }) {
    const { FetchData, load } = GeneralFetch()
    const [, setDetails] = useRecoilState(Details)

    function optionEvent(endpoint, method) {
        (async () => {
            await FetchData(null, endpoint, method, false, 'user')
        })()
    }

    const items = [
        object == 'appointments' &&
        {
            label: <div onClick={() => optionEvent('closeAppointment/' + data.id, 'PUT')} ><DoneOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Fechar</span></div>,
            key: '0',
        },
        object == 'appointments' &&
        {
            label: <div><UpdateOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Remarcar</span></div>,
            key: '1',
        },
        object == 'psychologist' &&
        {
            label: <div><EditOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Editar</span></div>,
            key: '1',
        },
        {
            label: <div onClick={() => setDetails({ open: true, data: data })} ><InfoOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Detalhes</span></div>,
            key: '2',
        },
        object == 'appointments' &&
        {
            type: 'divider',
        },
        object == 'appointments' &&
        {
            label: <div><CloseOutlinedIcon onClick={() => optionEvent('cancelAppointment/' + data.id, 'PUT')} fontSize='small' style={{ margin: "-5px 7px 0 0", color: "#EE6055" }} /> <span style={{ color: "#EE6055" }} >Cancelar</span></div>,
            key: '3',
        },
    ];

    return (
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
    )
};
export default DropDownOptions;