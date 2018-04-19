// Code Invitation Component Here
import React from 'react'

class Invitation extends React.component {

  render() {
    return (
      <h1> YOU </h1>
      {this.props.children}
    )
  }
}



export default Invitation;
