import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <div className='d-inline-flex justify-content-space-evenly' id='nav'>
        {/* <div  p-3 bg-secondary'> */}
            <Link to={'/'}>Catfish Accordion</Link>
            <br/>
            <Link to={'/cseUsers/'}>CSEs</Link>
            <br/>
            {/* <br/> */}
            <Link to={'/createCSEUser/form'}>NEW CSE</Link>
            <br/>
            <Link to={'/createUser/form'}>NEW User</Link>
            <br/>
            <Link to={'/users'}>Users</Link>
            {/* <br/>
            <Link to={'/editCSEUser/:id'}>Edit CSE</Link> */}
            <br/><br/><br/><br/>
        </div>
    )   
}

export default Nav;