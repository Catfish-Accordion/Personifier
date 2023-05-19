import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate, Router, useNavigate} from 'react-router-dom';


const CreateUser = (props) => {
    // const Navigate = useNavigate();
    // const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phoneNumber : ""
    })
    
    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newuser', user)
            .then((res) => {
                console.log(res);
                // CLEAR OUT FORM DATA
                setUser({firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    phoneNumber : ""
                })
                Navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={user.firstName}/>
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={user.lastName}/>
                    {
                        errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)
                    }
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={changeHandler} value={user.username}/>
                    {
                        errors.username && (<p className='text-danger'>{errors.username.message}</p>)
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={changeHandler} value={user.email}/>
                    {
                        errors.email && (<p className='text-danger'>{errors.email.message}</p>)
                    }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={changeHandler} value={user.phoneNumber}/>
                    {
                        errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)
                    }
                </div>
                {/* <Link to={`/`}> */}
                    <button>Submit</button>
                {/* </Link> */}
            </form>
        </div>
    )   
}

export default CreateUser;