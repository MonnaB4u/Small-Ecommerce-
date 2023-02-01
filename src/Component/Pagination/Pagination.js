import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Pagination.css'

const Pagination = () => {
    return (
        <div className="pagination">
            <i className="fa btn "> <FontAwesomeIcon icon={faLessThan}></FontAwesomeIcon> </i>

            <button className="btn pagination_btn">1</button>
            <button className="btn pagination_btn">2</button>
            <button className="btn pagination_btn"> 3</button>
            <button className="btn pagination_btn"> 4</button>
            <button className="btn pagination_btn"> 5</button>
            <button className="btn pagination_btn">6 </button>
            <button className="btn pagination_btn"> 7</button>
            <button className="btn pagination_btn">8 </button>
            <button className="btn pagination_btn">9 </button>
            <button className="btn pagination_btn">10 </button>
            <button className="btn pagination_btn">... </button>
            <button className="btn pagination_btn"> 20</button>

            <i className="fa btn pagination_btn"> <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon> </i>

        </div>
    );
};

export default Pagination;
