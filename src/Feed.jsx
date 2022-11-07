import React from 'react'
import {Header} from "./Common";
import FeedImage from "./assets/img/feed/feed.png";
import FeedImage2 from "./assets/img/feed/feed2.png";
import FeedImage3 from "./assets/img/feed/feed3.png";
import FeedImage4 from "./assets/img/feed/feed4.png";
import FeedImage5 from "./assets/img/feed/feed5.png";

export default function Feed() {
  return (
    <div className="feed overflow-y-auto">
      <Header title='Feed'/>
      <div className='d-flex flex-column p-3'>
        <img alt='' className='img-fluid m-2' src={FeedImage}/>
        <img alt='' className='img-fluid m-2' src={FeedImage2}/>
        <img alt='' className='img-fluid m-2' src={FeedImage3}/>
        <img alt='' className='img-fluid m-2' src={FeedImage4}/>
        <img alt='' className='img-fluid m-2' src={FeedImage5}/>
      </div>
    </div>
  )
}