import React from 'react';
import { Tabs } from 'antd';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';

const TableTabs = () => (
    <Tabs
        defaultActiveKey="2"
        items={[DoneIcon, CloseIcon, EventIcon].map((Icon, i) => {
            const id = String(i + 1);
            return {
                label: (
                    <span>
                        <Icon />
                        Tab {id}
                    </span>
                ),
                key: id,
            };
        })}
    />
);
export default TableTabs;