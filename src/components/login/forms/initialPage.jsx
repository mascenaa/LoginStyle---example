import React from 'react'

import '../../login/login.css'


export default function initialPage() {

    return (
        <form className="form-login">
            <div className="form-logo">
                <h1 className="form-login--title">
                    Discogram
                </h1>
            </div>
            <div className="form-user">
                <input 
                    placeholder="user"
                    className="form-input"
                />
            </div>

            <div className="form-password">
                <input 
                    placeholder="password"
                    className="form-input"
                />
            </div>

            <div className="buttons">
                <button className="button-login">Login</button> 
                <button className="button-login">Sign up</button> 
            </div>
        </form>
    )
}