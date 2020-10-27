import React, { useRef, useState } from 'react';
import { postUserData } from '../../api/service';

import './style.css';

function UserForm() {

    const fieldForFirstName = useRef(null);
    const fieldForLastName = useRef(null);
    const fieldForTelephone = useRef(null);
    const fieldForAddress = useRef(null);
    const fieldForSSN = useRef(null);

    const [isCorrect, setIsCorrect] = useState(true);
    
    const createTemplateUserInfo = () => {
        const userInfo = {
            'firstName' : fieldForFirstName.current.value,
            'secondName' : fieldForLastName.current.value,
            'telNumber': fieldForTelephone.current.value,
            'fullAddress': fieldForAddress.current.value,
            'SSN': fieldForSSN.current.value,
        }
        return userInfo;
    }
    
    const handleValidate = () => {
        const value = fieldForSSN.current.value;
        const regExp = /^\d{3}-?\d{2}-?\d{4}$/;
        const valid = regExp.test(value);
        return valid;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = handleValidate();
        setIsCorrect(isValid);
        if(isValid) {
           const userInfo = createTemplateUserInfo();
          postUserData(userInfo);
           e.target.reset();
        }
    }
    
    return (
        <form className='user-form' onSubmit={ handleSubmit }>
            <div className='field-for-data user-form__first-name'>
                 <label htmlFor='first-name'>First name*</label>
                <input id='first-name' type='text' ref={fieldForFirstName} required></input>
            </div>
            <div className='field-for-data user-form__last-name'>
                 <label htmlFor='last-name'>Last name*</label>
                <input id='last-name' type='text' ref={fieldForLastName} required></input>
            </div>
            <div className='field-for-data user-form__telephone'>
                 <label htmlFor='telephone'>Telephone number*</label>
                <input id='telephone' type='tel' ref={fieldForTelephone} required></input>
            </div>
            <div className='field-for-data user-form__address'>
                 <label htmlFor='address'>Full address*</label>
                <input 
                id='address' 
                type='text' 
                ref={fieldForAddress} 
                required 
                placeholder='House number, street, city, country, postcode'>
                </input>
            </div>
            <div className='field-for-data user-form__ssn' >
                 <label htmlFor='ssn'>SSN*</label>
                <input id='ssn' className={isCorrect ? '' : 'incorrect'} type='text' ref={fieldForSSN} required placeholder='000-00-0000'></input>
            </div>
            <div className='field-for-btn'>
                <button type='submit' className='user-form__button'>Submit</button>
            </div>
        </form>
    )
}

export default UserForm;