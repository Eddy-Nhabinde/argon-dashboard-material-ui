import React from 'react';
import { Pagination } from 'antd';

const Paging = ({ setPage, data }) => {
    return (
        <Pagination
            style={{ float: "right", margin: "15px 25px 0 0 " }}
            defaultCurrent={1} total={data?.total}
            pageSize={10}
            onChange={(e) => setPage(e)}
        />
    )
};
export default Paging;