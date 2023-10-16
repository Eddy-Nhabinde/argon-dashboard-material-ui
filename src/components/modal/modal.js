import * as React from 'react';
import Modal from '@mui/material/Modal';
import Remarcar from './ModalChildren/RemarcarConsulta';
import { ModalState } from 'store';
import { useRecoilState } from 'recoil';

export default function BasicModal() {
    const [open,] = useRecoilState(ModalState)

    return (
        <Modal
            open={open?.open}
        >
            <Remarcar psicologo={open.psicologo} id={open.psiId} date={open.data} time={open.hora} cId={open.id} />
        </Modal>
    );
}