import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { Dropdown, Space } from 'antd';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function DropDownOptions({ id, object }) {
    console.log(object)
    const items = [
        object == 'appointments' &&
        {
            label: <><DoneOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Fechar</span></>,
            key: '0',
        },
        object == 'appointments' &&
        {
            label: <><UpdateOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Remarcar</span></>,
            key: '1',
        },
        object == 'psychologist' &&
        {
            label: <><EditOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Editar</span></>,
            key: '1',
        },
        {
            label: <><InfoOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0" }} /> <span>Detalhes</span></>,
            key: '2',
        },
        object == 'appointments' &&
        {
            type: 'divider',
        },
        object == 'appointments' &&
        {
            label: <><CloseOutlinedIcon fontSize='small' style={{ margin: "-5px 7px 0 0", color: "#EE6055" }} /> <span style={{ color: "#EE6055" }} >Cancelar</span></>,
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
                    <MoreHorizIcon fontSize='medium' style={{ color: "#5B5B5B" }} />
                </Space>
            </a>
        </Dropdown>
    )
};
export default DropDownOptions;