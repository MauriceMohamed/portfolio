import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.jpg'
const header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>hello I'm</h5>
        <h1>mauriceMohamed</h1>
        <h5 className='text-light'>junior devlopper</h5>
        <CTA />

        <div className='me'>
          <img src={ME} alt='' />
        </div>

        
      </div>
    </header>
  )
}

export default header