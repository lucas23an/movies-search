import React from 'react';

import ReactPaginate from 'react-paginate';

const pagination = (props) => (
    <div>
        <ReactPaginate previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={props.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={props.updatePage}
            initialPage={0}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
    </div>
);

export default pagination;