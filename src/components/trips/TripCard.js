import React, { useEffect } from "react";
import '../../assets/css/tripCard.css';
import avatar from '../../assets/img/avatar.png';

function TripCard() {


  return (

    <div className="trip-card-item">

      <div className="trip-date">le 20-05-2023</div>

      <div className="location-user-container">
        <div className='location-container'>
          <div className="start-location">
            <label>debut : </label>
            <label>Tamdant oufelle</label>
          </div>
          <div className="end-location">
            <label>Fin : </label>
            <label>Taaourirt imzilen</label>
          </div>
        </div>
        <div className="user-container">
          <div class="card">
            <div className="profile-container">
              <img src={avatar} alt='' />
            </div>
            <div class="general">
              <h3>Jane Doe</h3>

              <span class="reviews">
                <span>Avis</span>
                <span>4.5</span>
                <i style={{color:'#f5e21e'}} className="fa fa-star"></i>
                <span> - 120</span>
              </span>

            </div>
          </div>
        </div>
      </div>

      <p className="v-line"></p>

      <div className="time-container">

        <div className="trip-btns">
          <button className="btn-join btn">Rejoind  trip</button>
        </div>

        <div className="time">
          <section className="start-time">
            <p className="dot"></p>
            <p className="txt-time">15:00</p>
          </section>
          <section className="dotes">
            <p></p>
            <p></p>
            <p></p>
          </section>
          <section className="end-time">
            <p className="dot"></p>
            <p className="txt-time">20:00</p>
          </section>
        </div>
        <div> 10 days</div>
      </div>
    </div>

  );
}

export default TripCard;
