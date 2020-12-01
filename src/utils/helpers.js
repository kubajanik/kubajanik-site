import React from 'react'
import {FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter} from 'react-icons/fa'

export function createSocialIcon(name, props) {
  const icons = {
    twitter: FaTwitter,
    stack: FaStackOverflow,
    github: FaGithub,
    linkedin: FaLinkedinIn
  }
  
  const Icon = icons[name]
  return <Icon {...props} />
}