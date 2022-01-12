
import { Item } from "../Item/Item";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './DataList.styles.css'

export const DataList = ({ itemsPerPage, filter }) => {
    const data = useSelector(state => state.data)
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [data, itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <div className="list">
                {currentItems && currentItems.map(item => {
                    return (
                        <Item
                            key={item.id}
                            {...item}
                        />
                    )
                }
                )}
            </div>
            <ReactPaginate
                className="paginate"
                ccontainerClassName={'pagination'}
                activeClassName={'active'}
                breakLabel="..."
                nextLabel=">>>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<<<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}
