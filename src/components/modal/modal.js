import * as React from 'react';
import { ModalState } from 'store';
import { useRecoilState } from 'recoil';
import Remarcar from './remarcar/RemarcarConsulta';
import { Modal } from '@mui/material';

export default function BasicModal() {
    const [open,] = useRecoilState(ModalState)

    return (
        <Modal
            open={open?.open}
        >
            <Remarcar segmento={open?.segmento} psicologo={open.psicologo} id={open.psiId} date={open.data} time={open.hora} cId={open.id} />
        </Modal>
    );
}