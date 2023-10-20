import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { Details } from 'store';
import { useRecoilState } from 'recoil';
import './style.css'
import AppDetails from './appDetails';
import PsychoDetails from './psychoDetails';

const DetailsView = () => {
    const [details, setDetails] = useRecoilState(Details)

    const onClose = () => {
        setDetails({ open: false });
    };

    return (
        <Drawer
            closeIcon={false}
            placement={'right'}
            width={details?.object == 'appointments' ? 450 : '50vw'}
            onClose={onClose}
            open={details?.open}
        >
            {
                details?.object == 'appointments' ?
                    <AppDetails onClose={onClose} details={details} /> : <PsychoDetails onClose={onClose} details={details} />
            }
        </Drawer>
    );
};
export default DetailsView;