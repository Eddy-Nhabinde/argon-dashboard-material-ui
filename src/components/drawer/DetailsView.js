import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { Details } from 'store';
import { useRecoilState } from 'recoil';
import './style.css'

const DetailsView = () => {
    const [details, setDetails] = useRecoilState(Details)

    const onClose = () => {
        setDetails({ open: false });
    };

    return (
        <Drawer
            title="Detalhes Da Consulta"
            closeIcon={false}
            placement={'right'}
            width={400}
            onClose={onClose}
            open={details?.open}
        >
            <div class="container" style={{ display: "flex", flexDirection: "column", marginTop: "80px", }} >
                <span style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold", fontStyle: "oblique" }} >Clayd Nhabinde</span>

                <table>
                    <tr>
                        <td>
                            <span>Problema:</span>
                        </td>
                        <td>
                            Familiar
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Data:</span>
                        </td>
                        <td>
                            2022-10-10
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Hora:</span>
                        </td>
                        <td>
                            13:30
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Psicólogo:</span>
                        </td>
                        <td>
                            Dr. Maposse
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Contacto:</span>
                        </td>
                        <td>
                            844090867
                        </td>
                    </tr>
                </table>

            </div>
            <Space class='options'>
                <Button type="primary" danger>
                    Cancelar
                </Button>
                <Button type="primary">Remarcar</Button>
            </Space>
            <Space class='sair'>
                <Button type="dashed" style={{ background: "46ACC2" }}>
                    Sair
                </Button>
            </Space>
        </Drawer>
    );
};
export default DetailsView;