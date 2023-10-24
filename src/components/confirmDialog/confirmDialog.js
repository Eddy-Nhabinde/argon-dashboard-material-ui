import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { Confirmation } from 'store';
import { GeneralFetch } from 'Api/generalFetch/generalFetch';
import { List } from 'store';
import { AlertState } from 'store';
import moment from 'moment';

export default function ConfimDialog() {
    const [modal, ConfirmContextHoldert] = Modal.useModal();
    const [openConfirm, setOpenConfirm] = useRecoilState(Confirmation)
    const { FetchData, load } = GeneralFetch()
    const [allData, setAllData] = useRecoilState(List)
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
            if (openConfirm?.operation == 'cancel' && openConfirm?.schedule == true) {
                let copy = [...allData]
                allData?.map((val, index) => {
                    if (val.id == openConfirm?.id) {
                        copy[index] = {
                            ...val,
                            estado_id: 2,
                        }
                    }
                })
                setAllData(copy)
            } else {
                let copy = allData?.filter((row) => row.id != openConfirm?.id)
                setAllData(copy)
            }
        } else if (openConfirm?.operation == "reschedule") {
            let copy = [...allData]
            allData?.map((val, index) => {
                if (val.id == openConfirm?.id) {
                    let data = moment(openConfirm?.body?.data).format("L").toString()
                    copy[index] = {
                        ...val,
                        hora: openConfirm?.body?.hora,
                        data: data?.substring(6) + "-" + data?.substring(0, 2) + "-" + data?.substring(3, 5)
                    }
                }
            })
            setAllData(copy)
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
