import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <div className='d-inline-flex justify-content-space-evenly' id='nav'>
        {/* <div  p-3 bg-secondary'> */}
            <Link to={'/'}>CSEs</Link>
            <br/>
            {/* <Link to={'/cseUser'}>CSE USER</Link> */}
            {/* <br/> */}
            <Link to={'/createCSEUser/form'}>NEW CSE</Link>
            {/* <br/> */}
            {/* <Link to={'/editCSEUser/:id'}>Edit CSE</Link> */}
            <br/><br/><br/><br/>
        </div>
    )   
}

export default Nav;