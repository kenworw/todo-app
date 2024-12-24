import React from 'react'

const Footer = () => {
  return (
        <footer className="mt-auto bg-secondary text-white py-3">
            <div className='container text-center'>
            <span className='text-muted'>
                &copy; {new Date().getFullYear()} Todo App
            </span>
            </div>
        </footer>
  )
}

export default Footer
