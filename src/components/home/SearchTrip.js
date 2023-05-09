import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/searchTrip.css';

function SearchTrip() {
    return (
        <section className='search-trip-container main-box'>
            <h2>Search fro a trip</h2>
            <div className="search-container">
                <input type="text" placeholder="Search for your destination" />
                <button>Search</button>
            </div>

            <div className='create-trip-container'>
                <Link to='./create-trip'>
                    <button className='btn-create-trip btn'>
                        Craete trip
                    </button>
                </Link>
            </div>

        </section>
    )
}

export default SearchTrip