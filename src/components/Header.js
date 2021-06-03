import React, { Component } from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class Header extends Component {
    state = {
        isMobMenuActive: false
    }
    toggleMobileMenu = e => {
        this.setState({isMobMenuActive: !this.state.isMobMenuActive});
        if (e.target.tagName === 'A') window.scrollTo(0,0);
    }
    render(){
        // const { headerMenu: menu, location: { pathname : path } } = this.props;
        const { isMobMenuActive } = this.state;
        // const addPortfolioClass ='';
        const logo = '/img/logo.png'

        const style = {
            show: {
              display: 'block'
            }
          };

        const { t, i18n } = this.props;

        const mobNav =  t('header', {returnObjects: true}).map(e => {
            return(
                <li className='menu-mobile__item' key={e.url}>
                    <NavLink
                    activeClassName='active-nav'
                    className='menu-mobile__link'
                    to={`/${e.url}`}
                    onClick={this.toggleMobileMenu}>
                        {e.title}
                    </NavLink>
                </li>
            )
        })

        const nav = t('header', {returnObjects: true}).map(e => {
            return( 
                <li className="header__nav-item" key={e.url}>
                    <NavLink 
                    activeClassName="active-nav"
                    className='header__nav-link'
                    to={`/${e.url}`}
                    >{e.title}</NavLink>
                </li>
            )
        });
            return(
                <header className='header'>
                    <div className='container'>
                        <div className='header__inner'>
                            <div className="menu-mobile" style={isMobMenuActive ? style.show : null}>
                                <ul className="menu-mobile__list">
                                    {mobNav}
                                </ul>
                            </div>
                            <div className={isMobMenuActive ? 'burg close' : 'burg'} onClick={this.toggleMobileMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Link to='/' className='header__logo' onClick={() => window.scroll(0,0)}>
                                <img
                                    src={logo}
                                    alt='Pellegreeno pellets'
                                    title='Pellegreeno'
                                    />
                            </Link>
                            <nav className='header__nav'>
                                <ul className='header__nav-list'>
                                    {nav}
                                </ul>
                            </nav>
                            <div className='header__right'>
                                <span className='header__right-tel'>
                                +48 662 840 762
                                </span>
                                <span className='header__right-tel'>
                                    +38 067 311 48 85
                                </span>
                                <span className='header__right-tel--ring'></span>
                            </div>
                        </div>
                    </div>
                </header>
            )
    }
}






export default  withTranslation()(Header);
