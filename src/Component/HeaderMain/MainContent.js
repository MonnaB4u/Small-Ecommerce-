import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderMain.css'
import Products from './Products';

const MainContent = () => {
    return (
        <div className="main-content">

            <section className="actions flex-space-around">
                <div className="action_sort">
                    <label htmlFor="sort">Sort By:</label>
                    <select name="sort" id="sort">
                        <option value="sold">Most sold first</option>
                        <option value="sold">Most rated first</option>
                        <option value="sold">Newes first</option>
                        <option value="sold">Biggest discount</option>
                    </select>
                </div>

                <div className="action_search">
                    <input type="text" placeholder='Searct Product' />
                    <button className="btn"> <i className="fa fa-solid"><FontAwesomeIcon icon={faSearch} /> </i> </button>
                </div>
            </section>

            {/* Production Section Start Here */}
            <Products />

        </div>
    );
};

export default MainContent;
