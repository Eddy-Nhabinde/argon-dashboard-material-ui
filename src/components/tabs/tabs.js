import React from 'react';
import { Tabs } from 'antd';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';

const TableTabs = ({ setTab, tab }) => (
    <Tabs
        style={{ marginTop: "20px" }}
        onChange={(e) => setTab(e)}
        defaultActiveKey="1"
        activeKey={tab}
        items={[
            { icon: EventIcon, label: "Pendentes", color: "#FAA916" },
            { icon: CloseIcon, label: "Canceladas", color: "#F21B3F" },
            { icon: DoneIcon, label: "Concluidas", color: "#379634" }
        ].map((Icon, i) => {
            const id = String(i + 1);
            return {
                label: (
                    <span style={{ fontWeight: "500", letterSpacing: "1px", color: Icon.color }} >
                        <Icon.icon style={{ margin: "-5px 5px -3px 0" }} />
                        {Icon.label}
                    </span>
                ),
                key: id,
            };
        })}
    />
);
export default TableTabs;