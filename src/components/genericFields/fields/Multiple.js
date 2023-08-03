import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";
import styles from './Fields.module.css'

export default function Selects({ label, selected, setSelected, tabID }) {
  const { FetchData, load, data } = GeneralFetch()

  useEffect(() => {
    (async () => {
      await FetchData(null, 'getUsersToInvite/' + tabID, 'get', false, 'users')
    })()
  }, [])

  function setSelectData(event) {
    let data = event?.map((val) => {
      return { ...val, role: 'ler' }
    })
    setSelected(selected => ({ ...selected, users: data }))
  }

  if (data.length > 0) {
    data.forEach(obj => {
      obj['label'] = obj['nome']
      obj['value'] = obj['id']
    });
  }

  return (
    <React.Fragment>
      {data &&
        <div className={styles.component}>
          <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <MultiSelect
              options={data}
              value={selected.users}
              className={styles.select}
              onChange={(e) => { setSelectData(e) }}
              isLoading={load}
              closeOnChangedValue={true}
            />
          </div>
        </div>
      }
    </React.Fragment>
  );
};