import { useState } from "react"
import ReturnParams from "./returnParams"
import { AlertState } from "store"
import { useRecoilState } from "recoil"

export function GeneralFetch() {
    const baseURL = 'http://127.0.0.1:8000/api/'

    const [alert, setAlert] = useRecoilState(AlertState)
    const [load, setLoad] = useState(false)
    const [data, setData] = useState([])
    const { getParams } = ReturnParams({ setLoad })

    async function FetchData(obj, endPoint, method, object) {

        fetch(baseURL + "" + endPoint, getParams(method, obj))
            .then((response) => response.json())
            .then((data) => {
                if (data.error || data.warning || data.success) {
                    setAlert(alert => ({ ...alert, type: Object.keys(data)[0], msg: data[Object.keys(data)[0]] }))
                    setData(data?.hasOwnProperty('success'))
                } else {
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