import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://fb.com/soikot.mh" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com/maha-d-ihassn" target="_blank"><BsTwitter/></a>
        <a href="https://github.com/mama-d-ihasan" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials