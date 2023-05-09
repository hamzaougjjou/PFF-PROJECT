import React from 'react'
import SearchTrip from './SearchTrip';
import './../../assets/css/home.css';
import Places from './Places';
import TripCard from '../trips/TripCard';
import { NavLink } from 'react-router-dom';
import PostItem from '../posts/PostItem';

function Home() {
    return (
       
            <main className="App-container">

                <SearchTrip />
                <Places />

                <h2>Popular trips</h2>
                <div className='home-trip-card-container'>
                    <TripCard />
                    <TripCard />
                    <TripCard />
                </div>
                <div className='txt-center txt-center w-full'>
                    <NavLink to='./trips' className='btn-view-more'>
                        voir toutes
                    </NavLink>
                </div>

                <h2>Popular Posts</h2>
                <div className='post-items-container'>
                    <PostItem />
                    <PostItem />
                </div>
                <div className='txt-center txt-center w-full'>
                    <NavLink to='./posts' className='btn-view-more'>
                        voir toutes
                    </NavLink>
                </div>

            </main>
    )
}

export default Home