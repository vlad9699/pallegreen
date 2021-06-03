import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { useTranslation, withTranslation, Trans } from 'react-i18next';

class Home extends Component {
    render() {
        const { t, i18n } = this.props;

        const changeLanguage = lng => {
          i18n.changeLanguage(lng);
        };

        const logo = '/img/logo-home.png'

        const language = [
            {title: 'PELLET DRZEWNY', url: 'main', lang: 'pl'},
            {title: 'GRANULES DE BOIS', url: 'main', lang: 'it'},
            {title: 'PELLETS DI LEGNO', url: 'main', lang: 'fr'},
            {title: 'ДЕРЕВНІ ПЕЛЕТИ', url: 'main', lang: 'uk'},
            {title: 'WOODEN PELLETS', url: 'main', lang: 'en'}
          ];

        const newLan = language.map(e =>{
            return(
                <li className='home__top-item' key={e.title} >
                    <Link to={e.url} key={e.title} className='home__top-link'
                    onClick={() => {changeLanguage(e.lang); window.scroll(0,0)}}
                    >
                        {e.title}
                    </Link>
                </li>
            )
        })
        return(
        <>
            <header className='home'>
                <div className='container'>
                    <div className='home__inner'>
                        <img src={logo} 
                            alt='Pellegreeno'
                            title='Pellegreeno'
                            />
                    </div>
                </div>
            </header>
            <section className='home__top'>
                <div className='container'>
                    <div className='home__top-inner'>
                        <div className='home__top-title'>
                            <h1>PELLETS</h1>
                            <h3>PREMIUM</h3>
                        </div>
                        <ul className='home__top-language'>
                            {newLan}
                        </ul>
                        <figure className='home__top-tree'> 
                            <img src='img/tree.svg'
                            alt='Pellegreeno'
                            title='tree'
                            />
                        </figure>
                    </div>
                </div>
            </section>
            <section className='home__bottom'>
                <div className='container'>
                    <div className='home__bottom-title'>
                        <figure>
                            <img src='img/natural.png'
                            alt='Pellegreeno'
                            title='natural'
                            />
                        </figure>
                        <div className='home__bottom-title--wrapp'>
                            <h3> <i>Pure coniferous wood/ Cryste drewno iglaste<br />Legno di conifere/ Bois de coniferes<br />Чиста хвойна деревина</i></h3>
                        </div>
                    </div>
                    <div className='home__bottom-pic'>
                        <figure>
                            <img src='img/air.png'
                            alt='Pellegreeno'
                            title='natural'
                            />
                        </figure>
                        <figure>
                            <img src='img/wood.png'
                            alt='Pellegreeno'
                            title='natural'
                            />
                        </figure>
                        <figure>
                            <img src='img/ash.png'
                            alt='Pellegreeno'
                            title='natural'
                            />
                        </figure>
                    </div>
                    <div className='home__bottom-code'>
                        <img src='img/code.png'
                        alt='Pellegreeno'
                        title='natural'
                        />
                    </div>
                    <div className='home__footer'>
                        <h3>Made in Ukraine/Wyprodukowano na Ukrainie/ Fatto in Ucraina/ Fabrique en Ukraine/ Виготовленно в Україні</h3>
                    </div>
                </div>
            </section>
            
        </>

        )
    }
}

//export default Home;
export default  withTranslation()(Home);