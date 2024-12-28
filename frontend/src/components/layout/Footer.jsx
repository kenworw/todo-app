import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-dark bg-gradient text-white py-4 mt-auto">
            <div className='container text-center'>
            <span>
                &copy; {new Date().getFullYear()} Todo App
            </span>
            </div>
        </footer>
  )
}

export default Footer
