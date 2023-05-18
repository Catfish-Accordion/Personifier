import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <div className='d-inline-flex justify-content-space-evenly'>
        {/* <div  p-3 bg-secondary'> */}
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/cseUser'}>CSE USER</Link>
            <br/>
            <Link to={'/createCSEUser/form'}>Create A New CSE User</Link>
            <br/><br/><br/><br/>
        </div>
    )   
}

export default Nav;

