import { useState } from "react"
import { OrganizeTable } from "../../utils/tableData/tableHeadersAndData"
// import Swal from 'sweetalert2'
import ReturnParams from "./returnParams"

export function GeneralFetch() {
    const baseURL = 'http://127.0.0.1:8000/api/'

    const [load, setLoad] = useState(false)
    const [data, setData] = useState([])

    const { tableHeadersAndData } = OrganizeTable({ setData })
    const { getParams } = ReturnParams({ setLoad })

    async function FetchData(obj, endPoint, method, table, object) {

        let response = fetch(baseURL + "" + endPoint, getParams(method, obj))
            .then((response) => response.json())
            .then((data) => {
                if (data.error || data.warning || data.success) {
                    // Swal.fire({
                    //     icon: Object.keys(data)[0],
                    //     title: data[Object.keys(data)[0]],
                    //     showConfirmButton: true,
                    //     timer: 2500
                    // })
                } else {
                    if (object && table) {
                        tableHeadersAndData(data, object)
                    } else if (object && !table) {
                        if (data[object]) {
                            if (data.data?.[object]) {
                                setData(data.data[object])
                            } else {
                                setData(data[object])
                            }
                        } else {
                            setData(data)
                        }
                    }
                }
                setLoad(false)
                return data || 1
            })
        return response
    }

    return { FetchData, load, data }
}