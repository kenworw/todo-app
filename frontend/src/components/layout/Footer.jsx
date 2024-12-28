import React from 'react'

const Footer = () => {
  return (
        <footer className="mb-auto bg-dark bg-gradient py-4">
            <div className='container text-center'>
            <span className='text-muted'>
                &copy; {new Date().getFullYear()} Todo App
            </span>
            </div>
        </footer>
  )
}

export default Footer
