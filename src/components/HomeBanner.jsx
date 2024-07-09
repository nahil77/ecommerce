import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={"https://voicebot.ai/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"} alt="product pic" className='width-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={"https://www.nimbarkfoods.com/images/blog/food.jpeg"} alt="product pic" className='width-100' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={"https://www.nimbarkfoods.com/images/blog/WhatsApp%20Image%202022-08-22%20at%2010.58.57%20AM.jpeg"} alt="" className='width-100' />
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeBanner