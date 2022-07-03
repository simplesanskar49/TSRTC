import React, { Component } from 'react'
import image2d from './image2.jpg';
export class LoginImage extends Component {
  render() {
    return (
      <div className="randomimage">
        <img src={image2d.jpg}/>
      </div>
    )
  }
}

export default LoginImage