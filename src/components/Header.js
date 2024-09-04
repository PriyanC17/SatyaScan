import React from "react";


const Header = () => {
    <>
    
       <header className="bg-teal-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center"></div>
            <div>
              <h1 className="text-2xl font-bold">M. M. Patel Students Research Cell</h1>
              <p className="text-sm">KSV University</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'About', 'Research', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-200">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
}

export default Header;