import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='sidebar'>
      <div className="sidebar-header">
          <button className='toggle-button'>
            <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
          </button>
        <div className="header-logo">
          logo
        </div>
      </div>
    </div>
  )
}

export default App
