import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Display = (props) => {
    const {cseUserList, setCseUserList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allcseusers')
            .then((res) => {
                console.log(res);
                setCseUserList(res.data.cseusers)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return(
        <div className='d-flex justify-content-between'>
            <h2>All CSE Users</h2>
            {cseUserList.map((cseUser) => (
                    <div key={cseUser._id}>
                        <h2>Name : {cseUser.firstName} {cseUser.lastName} ({cseUser.preferredPronouns})</h2>
                        <h4>Slack : {cseUser.slackName}</h4>
                        <h4>Twilio Email : {cseUser.twilioEmail}</h4>
                        <h4>Segment Email : {cseUser.segmentEmail}</h4>
                    </div>
                ))}
        </div>
    )   
}

export default Display;