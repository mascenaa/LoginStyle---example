import React from 'react'


import Frame from '../../assets/Frame.svg'
import InitialPage from './forms/initialPage'
import './login.css'


export default function Login() {

    return (
        <> 
    <section className="body">
        <div className="divFrame">
            <img
             className="frame"
             src={Frame} 
             alt="Frame" />
        </div>

        <div className="divLogin">
            <InitialPage />

            <div className="semiFooter">
                <h2 className="title">made by @patroooo</h2>
            </div>
        </div>

        </section>
        </>
    )
}