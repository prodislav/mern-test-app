import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getUsersData } from '../../api/service';

import './style.css';

function AdminTable() {
    const [usersData, setUsersData] = useState([]);

    const getData = async () => {
        const data = await getUsersData();
        setUsersData(data.payload);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="table-container">
            <div className='user-item-wrapper'>
                <div className="user-item">
                    <p className="user-item__info">First name</p>
                    <p className="user-item__info">Last name</p>
                    <p className="user-item__info">Telephone number</p>
                    <p className="user-item__info">Full Address</p>
                    <p className="user-item__info">SSN</p>
                </div>
                {usersData?.map((item, index) => {
                    return (
                        <div className='user-item' key={index}>
                            <p>{item.firstName}</p>
                            <p>{item.secondName}</p>
                            <p>{item.telNumber}</p>
                            <p>{item.fullAddress}</p>
                            <p>{item.SSN}</p>
                        </ div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminTable;