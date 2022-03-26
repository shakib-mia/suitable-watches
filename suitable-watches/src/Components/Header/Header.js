import React from 'react';

const Header = () => {
      return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">Suitable Watches</a>
                  <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                          <a href="/Home" className="nav-link">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                          <a href="/Link" className="nav-link">Link</a>
                                    </li>
                                    <li className="nav-item">
                                          <a href="/More" className="nav-link">More</a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>

      );
};

export default Header;