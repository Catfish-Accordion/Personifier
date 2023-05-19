import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const UserList = (props) => {
    const {userList, setUserList} = props;
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        axios.get('http://localhost:8000/api/allusers')
            .then((res) => {
                // console.log(res);
                setUserList(res.data.users)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        // console.log(id)
        axios.delete(`http://localhost:8000/api/deleteuser/${id}`)
            .then((res) => {
                // console.log(res);
                const updatedUserList = userList.filter((user) => user._id !== id)
                setUserList(updatedUserList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div >
            <h2>All Users</h2>
            <div className='d-flex justify-content-around flex-wrap'>
                {userList.map((user) => (
                        <div className='userCard' key={user._id}>
                            <h2>Name : {user.firstName} {user.lastName} ({user.preferredPronouns})</h2>
                            <h4>Slack : {user.slackName}</h4>
                            <h4>Twilio Email : {user.twilioEmail}</h4>
                            <h4>Segment Email : {user.segmentEmail}</h4>
                            <Link className='btn btn-secondary' to={`/viewUser/${user._id}`}>View User</Link>
                            <Link className='btn btn-primary' to={`/editUser/${user._id}`}>Edit</Link>
                            <button className='btn btn-danger' onClick={() => deleteHandler(user._id)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    )   
}

export default UserList;