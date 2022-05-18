import React from 'react'
import '../App.css'
const home = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center max-screen-height'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Login</h4>

                            <div>
                                <div>
                                    <label>Username</label>
                                    <input />
                                </div>
                                <div>
                                    <label>Passowrd</label>
                                    <input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default home