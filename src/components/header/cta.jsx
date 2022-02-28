import React from 'react'
import CV from '../../assets/cv.pdf'

const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>download CV</a>
        <a href='#contact' className='btn btn-primay'>Let's talk</a>
    </div>
  )
}

export default cta