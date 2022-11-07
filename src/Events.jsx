import React, {useState, useEffect} from 'react'
import {Header} from "./Common";
import EventImage from "./assets/img/events/Event.png";
import EventImage2 from "./assets/img/events/Event2.png";
import EventImage3 from "./assets/img/events/Event3.png";
import EventImage4 from "./assets/img/events/Event4.png";
import EventImage5 from "./assets/img/events/Event5.png";

export default function Events() {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online');
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
        localStorage.setItem("users", JSON.stringify(result))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('users');
      setData(JSON.parse(collection))
    })
  }, [])
  return (
    <div className='events'>
      <Header title='Events'/>
      <img alt='' className='img-fluid m-2' src={EventImage}/>
      <img alt='' className='img-fluid m-2' src={EventImage2}/>
      <img alt='' className='img-fluid m-2' src={EventImage4}/>
      <img alt='' className='img-fluid m-2' src={EventImage3}/>
      <img alt='' className='img-fluid m-2' src={EventImage4}/>
      <img alt='' className='img-fluid m-2' src={EventImage5}/>
      <img alt='' className='img-fluid m-2' src={EventImage2}/>
      <img alt='' className='img-fluid m-2' src={EventImage4}/>
      <img alt='' className='img-fluid m-2' src={EventImage5}/>
      <img alt='' className='img-fluid m-2' src={EventImage2}/>
      <img alt='' className='img-fluid m-2' src={EventImage3}/>
      <img alt='' className='img-fluid m-2' src={EventImage5}/>
      <img alt='' className='img-fluid m-2' src={EventImage2}/>
      <img alt='' className='img-fluid m-2' src={EventImage3}/>
      <img alt='' className='img-fluid m-2' src={EventImage3}/>
      <img alt='' className='img-fluid m-2' src={EventImage4}/>
      <img alt='' className='img-fluid m-2' src={EventImage2}/>
      <img alt='' className='img-fluid m-2' src={EventImage3}/>
      <img alt='' className='img-fluid m-2' src={EventImage5}/>
      <img alt='' className='img-fluid m-2' src={EventImage4}/>
      <img alt='' className='img-fluid m-2' src={EventImage5}/>
      {/*<Table striped bordered hover>*/}
      {/*  <thead>*/}
      {/*  <tr>*/}
      {/*    <th>Id</th>*/}
      {/*    <th>Name</th>*/}
      {/*    <th>Email</th>*/}
      {/*    <th>Address</th>*/}
      {/*  </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*  {*/}
      {/*    data.map((item) => (*/}
      {/*      <tr key={item.id}>*/}
      {/*        <td>{item.id}</td>*/}
      {/*        <td>{item.name}</td>*/}
      {/*        <td>{item.email}</td>*/}
      {/*        <td>{item.address.street}</td>*/}
      {/*      </tr>*/}
      {/*    ))*/}
      {/*  }*/}

      {/*  </tbody>*/}
      {/*</Table>*/}
    </div>
  )
}