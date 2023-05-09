import React from 'react'
import CommentItem from './comments/CommentItem'

function PostFooter() {
    return (
        <div className='post-item-footer-container'>
            <p className='h-line'></p>
            <div className='post-item-footer'>

                <section>
                    <p>15K</p>
                    <i className='fa fa-heart post-liked'></i>
                </section>
                <section>
                    <p>10K</p>
                    <i className='fa fa-message'></i>
                </section>
            </div>
            <div className='comments-container'>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    )
}

export default PostFooter