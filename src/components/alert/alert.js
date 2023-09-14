import { notification } from 'antd';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AlertState } from '../../store';

const Alert = ({ width }) => {
    const [api, contextHolder] = notification.useNotification();
    const [alert,] = useRecoilState(AlertState)

    useEffect(() => {
        if (alert.msg) {
            api[alert.type]({
                message: alert.type.toUpperCase(),
                description: alert.msg,
                style: {
                    width: width || 300,
                },
            });
        }
    }, [alert])

    return (
        <>
            {contextHolder}
        </>
    );
};
export default Alert;