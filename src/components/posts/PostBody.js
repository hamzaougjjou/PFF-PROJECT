import React from 'react'

import img1 from './../../assets/img/img-home-1.jpg';
import img2 from './../../assets/img/img-home-2.jpg';
import img3 from './../../assets/img/img-home-3.jpg';

function PostBody() {
    return (
        <div className='post-body-container'>
            <section className='post-description'>
                Add an image inside a container and add inputs with a matching label
                for each field. Wrap a element around them to process the input. You can
                learn more about how to process input in our PHP tutorial.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                nulla et dictum interdum, nisi lorem egestas vitae scel
                erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
                venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis
                Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            </section>
            <section className='post-images-container'>
                <img src={img1} className='post-image-item' alt='' />
                {/* <img src={img2} className='post-image-item' alt='' />
                <img src={img3} className='post-image-item' alt='' /> */}
            </section>
        </div>
    )
}

export default PostBody