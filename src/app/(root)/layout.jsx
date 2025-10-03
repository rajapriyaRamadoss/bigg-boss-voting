import Navbar from '@/components/Navbar.jsx'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <Navbar/>
  
    {children}</>
  )
}

export default layout