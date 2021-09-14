import React from 'react';

const Header = (props) => {
    return (
        <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a onclick="window.open(this.href,'_blank');return false;" href="https://play.google.com/store/apps/details?id=com.codedditapp.codeddit"
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Install App
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;