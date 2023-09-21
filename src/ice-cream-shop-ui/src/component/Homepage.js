import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react';

const Homepage = () => {
  return (
    <>
        <div className="sidenav">
            <h2 style={{textAlign:'center'}}>MENU</h2>
            <hr size='4' color='blue' width='90%'/>
            <a href="/add-icecream"><strong>ADD NEW</strong></a>
            <hr size='2' color='deeppink' width='90%'/>
            <a href="/iceCreams"><strong>ICE CREAM LIST</strong></a>
            <hr size='2' color='deeppink' width='90%'/>
        </div>

        <div className="main">

            <h2 className="title"><marquee>Welcome to Yamini Ice Creams</marquee></h2>
        </div>  

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </>
  )
}

export default Homepage