import React from 'react'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

function PostItem() {
    return (
        <div className='main-box post-item-container'>
            <PostHeader />
            <PostBody />
            <PostFooter />
        </div>
    )
}

export default PostItem