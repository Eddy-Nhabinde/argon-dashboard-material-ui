import React from 'react';
import { Tabs } from 'antd';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import { Radio } from 'antd';

const TableTabs = ({ setTab, tab }) => (
    <div style={{ margin: "13px 0 0 30px", display: "flex", flexDirection: "column", width: "33%", float: "right" }}>
        <span style={{ fontSize: "14px", fontWeight: "600" }} >Filtrar pelos estados das consultas</span>
        <Radio.Group defaultValue={tab} onChange={(e) => setTab(e.target.value)} style={{ borderWidth: "2px" }} >
            <Radio.Button value={1} style={{ color: "#FAA916", fontWeight: "600" }} ><EventIcon style={{ margin: "-3px 5px 0 0" }} />Pendentes</Radio.Button>
            <Radio.Button value={2} style={{ color: "#F21B3F", fontWeight: "600" }}><CloseIcon style={{ margin: "-3px 5px 0 0" }} />Canceladas</Radio.Button>
            <Radio.Button value={3} style={{ color: "#379634", fontWeight: "600" }}><DoneIcon style={{ margin: "-3px 5px 0 0" }} />Concluídas</Radio.Button>
        </Radio.Group>
    </div>
);
export default TableTabs;