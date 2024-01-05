import React from 'react'
import fireplace from '../assets/fireplace.mp4'

const Main = () => {
    return (
        <div className='main'>
           <video src={fireplace} autoPlay loop muted />
           <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
           </div>
        </div>
    )
}

export default Main