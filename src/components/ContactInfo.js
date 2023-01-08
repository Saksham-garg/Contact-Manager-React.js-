import React from 'react'
import user from '../images/user.png'
import {Link} from 'react-router-dom'
export default function ContactInfo(props) {

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Saksham</div>
          <div className="description">Saksham@test.com</div>
        </div>
      </div>
      <div style={{textAlign:'center'}} >
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  )
}
