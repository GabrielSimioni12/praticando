import React from 'react'



const link = ({children}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a>{children}</a>
  )
}

export default link
