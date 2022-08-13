import { faRectangleTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import htmlImage from './html.png'
import cssImage from './css.png'
import javascriptImage from './java-script.png'
import reactimage from './atom.png'
import reduxImage from './redux-icon.png'
import React from 'react'
import './Skills.css';

export const Skills = () => {
  return (
    <div className='flex-vt'>
    <h1 className='skills-heading section-title'>Skills</h1>
   <div className='skills-container flex-hz'>
   <img src={htmlImage} className="prog-lang-icon"/>
    <img src={cssImage} className="prog-lang-icon"/>
    <img src={javascriptImage} className="prog-lang-icon"/>
    <img src={reactimage} className="prog-lang-icon"/>
    <img src={reduxImage} className="prog-lang-icon"/>
   </div>
    </div>
  )
}
