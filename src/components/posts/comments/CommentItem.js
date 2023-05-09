import React from 'react'
import './../../../assets/css/comments.css'
import avatat from './../../../assets/img/avatar.png';
import CommentReplyItem from './CommentReplyItem';
function CommentItem() {
    return (
        <>
            <div className="comment-item-card">
                <div className="profile-container">
                    <img src={avatat} alt="user" />
                </div>
                <div className="comment-text-container main-box">
                    <h5>Samso Nagaro</h5>
                    <div className="comment-footer">
                        <span className="date">April 14, 2019</span>
                        <span className="action-icons">
                            <a href="#" data-abc="true"><i className="fa fa-pencil"></i></a>
                            <a href="#" data-abc="true"><i className="fa fa-rotate-right"></i></a>
                            <a href="#" data-abc="true"><i className="fa fa-heart"></i></a>
                        </span>
                    </div>
                    <p className="comment-text-cotent">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it
                    </p>
                </div>
            </div>
            <CommentReplyItem />
            <CommentReplyItem />
            <CommentReplyItem />
        </>
    )
}

export default CommentItem