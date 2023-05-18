import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Navigate, Router, useNavigate} from 'react-router-dom';


const CreateCseUser = (props) => {
    // const Navigate = useNavigate();
    // const navigate = useNavigate();
    const [cse, setCse] = useState({
        firstName: "",
        lastName: "",
        slackName: "",
        twilioEmail: "",
        segmentEmail: "",
        cseTeam: "",
        workspaceSlug: "",
        workspaceId: "",
        preferredPronouns: "",
        phoneNumber : ""
    })
    
    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setCse({...cse, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newcseuser', cse)
            .then((res) => {
                console.log(res);
                // CLEAR OUT FORM DATA
                setCse({firstName: "",
                    lastName: "",
                    slackName: "",
                    twilioEmail: "",
                    segmentEmail: "",
                    cseTeam: "",
                    workspaceSlug: "",
                    workspaceId: "",
                    preferredPronouns: "",
                    phoneNumber : ""
                })
                // NAVIGATE DOES NOT WORK : ERROR (useNavigate() may be used only in the context of a <Router> component.)
                // {<Router>
                // Navigate('/');
                // navigate('/');  // recommended use online
                // </Router>}
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
                    <input type="text" name="firstName" onChange={changeHandler} value={cse.firstName}/>
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={cse.lastName}/>
                    {
                        errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)
                    }
                </div>
                <div>
                    <label>Slack Name</label>
                    <input type="text" name="slackName" onChange={changeHandler} value={cse.slackName}/>
                    {
                        errors.slackName && (<p className='text-danger'>{errors.slackName.message}</p>)
                    }
                </div>
                <div>
                    <label>Twilio Email</label>
                    <input type="text" name="twilioEmail" onChange={changeHandler} value={cse.twilioEmail}/>
                    {
                        errors.twilioEmail && (<p className='text-danger'>{errors.twilioEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>Segment Email</label>
                    <input type="text" name="segmentEmail" onChange={changeHandler} value={cse.segmentEmail}/>
                    {
                        errors.segmentEmail && (<p className='text-danger'>{errors.segmentEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>CSE Team</label>
                    <input type="text" name="cseTeam" onChange={changeHandler} value={cse.cseTeam}/>
                    {
                        errors.cseTeam && (<p className='text-danger'>{errors.cseTeam.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace Slug</label>
                    <input type="text" name="workspaceSlug" onChange={changeHandler} value={cse.workspaceSlug}/>
                    {
                        errors.workspaceSlug && (<p className='text-danger'>{errors.workspaceSlug.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace ID</label>
                    <input type="text" name="workspaceId" onChange={changeHandler} value={cse.workspaceId}/>
                    {
                        errors.workspaceId && (<p className='text-danger'>{errors.workspaceId.message}</p>)
                    }
                </div>
                <div>
                    <label>Preferred Pronouns</label>
                    <input type="text" name="preferredPronouns" onChange={changeHandler} value={cse.preferredPronouns}/>
                    {
                        errors.preferredPronouns && (<p className='text-danger'>{errors.preferredPronouns.message}</p>)
                    }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={changeHandler} value={cse.phoneNumber}/>
                    {
                        errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )   
}

export default CreateCseUser;