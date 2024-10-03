import React from 'react'
import "./SocialIcon.css"
import { SocialIcon } from 'react-social-icons'

function SocialiconsComp() {
  return (
    <div className='sc-container'>
        <SocialIcon url='https://github.com/GLokeshchary' target='_blank'/>
        <SocialIcon url='https://www.youtube.com/@gattojilokeshchary8148'  target='_blank'/>
        <SocialIcon url='https://www.linkedin.com/in/lokesh-chary-58a385170/'  target='_blank'/>
    </div>
  )
}

export default SocialiconsComp