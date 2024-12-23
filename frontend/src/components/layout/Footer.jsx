import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='footer bg-dark text-white'>
            <div className='container text-center'>
            <span className='text-muted'>
                &copy; {new Date().getFullYear()} Todo App
            </span>
            </div>
        </footer>
    </div>
  )
}

export default Footer
