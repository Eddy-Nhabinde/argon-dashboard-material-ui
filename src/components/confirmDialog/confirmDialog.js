import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { Confirmation } from 'store';
import { GeneralFetch } from 'Api/generalFetch/generalFetch';
import { List } from 'store';
import { AlertState } from 'store';

export default function ConfimDialog() {
    const [modal, ConfirmContextHoldert] = Modal.useModal();
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)
    const { FetchData, load } = GeneralFetch()
    const [rows, setRows] = useRecoilState(List)
    const [alert,] = useRecoilState(AlertState)

    const onConfirm = () => {
        setOpenConfirm(openConfirm => ({ ...openConfirm, open: false }));
        (async () => {
            await FetchData({ ...openConfirm?.body }, openConfirm?.endpoint, openConfirm?.method, 'user')
        })();
        setOpenConfirm(openConfirm => ({ ...openConfirm, done: true }));
    }

    useEffect(() => {
        if (alert?.type != "error" && openConfirm?.operation != "reschedule") {
            let copy = rows?.filter((row) => row.id != openConfirm?.id)
            setRows(copy)
        }
    }, [alert])

    useEffect(() => {
        setOpenConfirm(openConfirm => ({ ...openConfirm, load: load }))
    }, [load])

    useEffect(() => {
        if (openConfirm?.open) {
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
