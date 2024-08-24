import React from 'react';

export default function Navbar({currentview}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => currentview('home')}  href="/">ToDo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex justify-content-center w-100">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item mx-2">
                <a className="nav-link active mt-1" onClick={() => currentview('home')}  aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link mt-1" onClick={() => currentview('about')}  href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => currentview('addtodo')} >
                  <button className='btn'>Add New</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
