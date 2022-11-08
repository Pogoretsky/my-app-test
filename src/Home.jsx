import React, {useEffect} from 'react'
import {Header} from "./Common";
import HomeImage from "./assets/img/home/home.png";
import HomeImage2 from "./assets/img/home/home2.png";
import HomeImage3 from "./assets/img/home/home3.png";
import HomeImage4 from "./assets/img/home/home4.png";
import HomeImage5 from "./assets/img/home/home5.png";

export default function Home() {
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        localStorage.setItem("users", JSON.stringify(result))
      })
    }).catch(err => {
      // let collection = localStorage.getItem('users');
    })
  }, [])
  return (
    <div className='home overflow-auto'>
      <Header title='Welcome!'/>
      <div className='d-flex flex-column p-3'>
        <img alt='' className='img-fluid m-2' src={HomeImage}/>
        <img alt='' className='img-fluid m-2' src={HomeImage2}/>
        <img alt='' className='img-fluid m-2' src={HomeImage3}/>
        <img alt='' className='img-fluid m-2' src={HomeImage4}/>
        <img alt='' className='img-fluid m-2' src={HomeImage5}/>
      </div>
    </div>
  )
}