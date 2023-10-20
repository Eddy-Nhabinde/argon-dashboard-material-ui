import { GetHistory } from "hooks/paciente/getHistory"
import { GetPsychoDetails } from "hooks/psicologo/getPsychoDetails"
import React, { useState } from "react"
import TableRowsGenerator from "utils/common/TableRowsGenerator"
import './style.css'
import Table from 'argonComponents/Tables/Table';
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress, IconButton } from '@mui/material';
import { Button, Space } from "antd"

export default function AppDetails({ details, onClose }) {
    const [page, setPage] = useState(1)
    const { historico, loadHistory } = GetHistory({ details, page })
    const { psicologo, loadPsycho } = GetPsychoDetails({ details })
    const { columns, rows } = TableRowsGenerator({ data: historico?.history, object: "history" })

    return (
        <>
            {
                loadHistory || loadPsycho ? <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <CircularProgress />
                </div>
                    :
                    <div>
                        <div class="container" style={{ display: "flex", flexDirection: "column", marginTop: "-10px", }} >
                            <span style={{ textAlign: "center", fontSize: "27px", fontWeight: "500", fontStyle: "oblique" }} >{details?.data?.paciente}</span>

                            <table>
                                <tr>
                                    <td>
                                        <span>Estado:</span>
                                    </td>
                                    <td>
                                        {details?.data?.estado}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Problema:</span>
                                    </td>
                                    <td>
                                        {details?.data?.problema}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Data:</span>
                                    </td>
                                    <td>
                                        {details?.data?.data}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Hora:</span>
                                    </td>
                                    <td>
                                        {details?.data?.hora}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Psicólogo:</span>
                                    </td>
                                    <td>
                                        {psicologo?.[0]?.nome}
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
                            {details?.data?.estado == 'Pendente' &&
                                <>
                                    <Button type="primary" danger>
                                        Cancelar
                                    </Button>
                                    <Button type="primary">Remarcar</Button>
                                </>
                            }
                        </Space>

                        <div class='Historico' >
                            <span style={{ fontSize: "18px", fontStyle: "oblique", lineHeight: "50px", fontWeight: "500" }} >Histórico do paciente</span>
                            <Table object="history" columns={columns} rows={rows} setPage={setPage} data={historico} page={page} />
                        </div>
                        <Space class='sair'>
                            <IconButton onClick={onClose} aria-label="delete">
                                <CloseIcon />
                            </IconButton>
                        </Space>
                    </div>
            }
        </>
    )
}