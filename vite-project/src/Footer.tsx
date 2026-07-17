import React, { useContext } from 'react'
import { TemaContext } from './TemaContext'

const Footer = () => {

const {nome} = useContext(TemaContext)

  return (
    <div>
        <p>usuario atual {nome}</p>
    </div>
  )
}

export default Footer