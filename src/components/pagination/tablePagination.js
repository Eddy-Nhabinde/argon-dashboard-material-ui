import React from 'react';
import { Pagination } from 'antd';

const Paging = ({ setPage, data, page }) => {
    return (
        <Pagination
            style={{ float: "right", margin: "15px 25px 0 0 " }}
            defaultCurrent={1} total={data?.total}
            current={page}
            pageSize={10}
            onChange={(e) => setPage(e)}
        />
    )
};
export default Paging;