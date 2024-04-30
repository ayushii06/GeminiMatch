import loading from './loading.gif'

import React, { Component } from 'react'

export default class Load extends Component {
  render() {
    return (
      <div className='text-center text-light'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}
