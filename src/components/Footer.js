import React, { Component } from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class Footer extends Component {
    render(){


        const { t, i18n } = this.props;

        const footerMenu = t('header', {returnObjects: true}).map(e => {
            return(
                <li className='footer__nav-item' key={e.url} >
                    <NavLink to={`/${e.url}`} 
                    className='footer__nav-link' 
                    activeClassName='active-nav'
                    onClick={() => window.scrollTo(0, 0)}>
                        {e.title}
                    </NavLink>
                </li>
            )
        })
        return(
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__inner'>
                        <Link to='/' className='header__logo' onClick={() => window.scrollTo(0, 0)}>  
                        <img
                            src='img/logo.png'
                            alt='pallegreeno'
                            title='Pallegreeno'
                            />
                        </Link>
                        <nav className='footer__nav'>
                            <ul className='footer__nav-list'>{footerMenu}</ul>
                        </nav>
                        <div className='footer__right'>
                            <span className='footer__right-tel'>
                            +48 662 840 762
                            </span>
                            <span className='footer__right-tel'>
                            +38 067 311 48 85
                            </span>
                            <span className='footer__right-tel--ring'></span>
                        </div>
                    </div>
                    <div className="footer__copy">&copy;Pellegreeno. All rights reserved 2019 &mdash; { new Date().getFullYear() }</div>
                </div>
            </footer>

        )
    }
}

export default  withTranslation()(Footer);