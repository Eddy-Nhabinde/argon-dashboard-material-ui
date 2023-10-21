import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { Confirmation } from 'store';


export default function ConfimDialog() {
    const [modal, ConfirmContextHoldert] = Modal.useModal();
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)

    const onConfirm = () => {
        setOpenConfirm(openConfirm => ({...openConfirm, open: false, confirmed: true }))
    }

    useEffect(() => {
        if (openConfirm.open) {
            modal.confirm({
                title: 'Confirmação',
                icon: <ExclamationCircleOutlined />,
                content: openConfirm?.msg,
                okText: 'Sim',
                cancelText: 'Não',
                onOk: onConfirm
            });
        }
    }, [openConfirm])

    return (
        <>
            {ConfirmContextHoldert}
        </>
    );
};
