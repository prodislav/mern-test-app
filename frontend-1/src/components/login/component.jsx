import React, { useRef } from 'react';
import { loginUser } from '../../api/service';

import './style.css';

function LoginForm({ onLogin }) {
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const createTemplateUser = () => {
        const userInfo = {
            'login': loginRef.current.value,
            'password': passwordRef.current.value,
        }
        return userInfo;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInfo = createTemplateUser();
        const result = await loginUser(userInfo);
        onLogin(result)
    }

    return (
        <form className='user-form' onSubmit={handleSubmit}>
            <div className='field-for-data user-form__first-name'>
                <label htmlFor='login'>Login*</label>
                <input id='login' type='text' ref={loginRef} required></input>
            </div>

            <div className='field-for-data user-form__first-name'>
                <label htmlFor='password'>Password*</label>
                <input id='password' type='password' ref={passwordRef} required></input>
            </div>

            <div className='field-for-btn'>
                <button type='submit' className='user-form__button' disabled={loginRef?.current?.value === '' || passwordRef?.current?.value === ''}>Submit</button>
            </div>
        </form>
    )
}

export default LoginForm;