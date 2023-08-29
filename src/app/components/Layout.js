import React from 'react'

const Layout = ({children, className=''}) => {
  return (
    <>
      <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-18 lg:p-8 md:p-6 sm:p-4 ${className}`}>
        {children}
      </div>
    </>
  )
}

export default Layout