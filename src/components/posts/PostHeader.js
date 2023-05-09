import React from 'react'
import avatar from './../../assets/img/avatar.png';

function PostHeader() {
  return (
    <div className='post-header-container'>
        <div className='profile-container'>
            <img src={avatar} alt='profile' />
            <p className='online'></p>
        </div>
        <div className='name-container'>
            <h4>hamza ougjjou</h4>
            <p>2 weeks ago</p>
        </div>
        <div className='menu-container'>
            <div className='namu-icon'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default PostHeader