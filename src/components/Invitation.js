// Code Invitation Component Here
import React from 'react'

class Invitation extends React.component {

  render() {
    return (
      <div>
      <h1> YOU </h1>
      {this.props.children}
      </div>
    )
  }
}


export default Invitation;
