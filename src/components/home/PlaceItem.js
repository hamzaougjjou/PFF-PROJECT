import React from 'react'

import img1 from './../../assets/img/img-home-1.jpg';
import img2 from './../../assets/img/img-home-2.jpg';
import img3 from './../../assets/img/img-home-3.jpg';

function PlaceItem({ showOverlay }) {
    return (
        <li className='xxx'>
            <img src={img1}
                alt="Beach destination"
                onClick={(e) => showOverlay(e)}
                draggable='false'
            />
            <h4>Beach</h4>
            <p>Relax on beautiful beaches and soak up the sun.</p>
        </li>
    )
}

export default PlaceItem