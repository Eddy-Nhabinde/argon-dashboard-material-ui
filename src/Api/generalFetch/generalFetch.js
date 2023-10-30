import { useState } from "react"
import ReturnParams from "./returnParams"
import { AlertState } from "store"
import { useRecoilState } from "recoil"
import { json } from "react-router-dom"
import { HttpStatus } from "store"

export function GeneralFetch() {
    const baseURL = 'http://127.0.0.1:8000/api/'

    const [alert, setAlert] = useRecoilState(AlertState)
    const [, setStatus] = useRecoilState(HttpStatus)
    const [load, setLoad] = useState(false)
    const [data, setData] = useState([])
    const { getParams } = ReturnParams({ setLoad })

    async function FetchData(obj, endPoint, method, object) {

        fetch(baseURL + "" + endPoint, getParams(method, obj))
            .then((response) => {
                setStatus(response.status)
                return response.json()
            })
            .then((data) => {
                if (data.error || data.warning || data.success) {
                    if (data?.validation == true)
                        setAlert(alert => ({ ...alert, type: Object.keys(data)[1], msg: data?.[Object.keys(data)[1]]?.[Object.keys(data[Object.keys(data)[1]])[0]]?.[0] }))
                    else
                        setAlert(alert => ({ ...alert, type: Object.keys(data)[0], msg: data[Object.keys(data)[0]] }))
                    setData(data?.hasOwnProperty('success'))
                } else if (!data?.expceptionb) {
                    if (object) {
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
            })
    }

    return { FetchData, load, data }
}