import { useEffect } from 'react'
import headers from './headers.json'

export function OrganizeTable({ setData }) {

    function tableHeadersAndData(data, object) {

        let tHeaders = []
        let tableData = {}
        const objType = Object.keys(data)

        if (data[objType]?.length > 0 || data.length > 0) {
            let objAttrubutes

            if (!object)
                objAttrubutes = Object.keys(data[0])
            else
                objAttrubutes = Object.keys(data[objType][0])

            headers.map((val) => {
                if (objAttrubutes.indexOf(val.value) != -1) {
                    tHeaders.push({ value: val.value, key: val.key })
                }
            })

            tableData.headers = tHeaders
            tableData.dados = data[object] || data

            setData(tableData)
        } else {
            setData([])
            return 0
        }
    }

    return {
        tableHeadersAndData
    }
}