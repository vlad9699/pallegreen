import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FormTel from './formTell';

import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Carusel from './Carusel';

class Homepage extends Component {
    render(){

        const { t, i18n } = this.props;
        const { top, subTop, center }  = window.firstPage
        return(
                    <>
                        <section className='homepage__top'>
                            <div className='container'>
                                <div className='homepage__top-inner'>
                                <div className='homepage__top-title'>
                                    <h1>{t('homepage.top.title')}</h1>
                                    <p>{t('homepage.top.desc')}</p>
                                    </div>
                                    <figure>
                                        <img src={top.img}
                                        alt='Palengreeno'
                                        title='Palengreeno'
                                        />
                                    </figure>
                                </div>
                            </div>
                        </section>
                        <section className='homepage__sub'>
                            <div className='container'>
                                <div className='homepage__sub-inner'>
                                    <div className='homepage__sub-title'>
                                        <h3 className='title'>{t('homepage.subTop.title')}</h3>
                                        <p>{t('homepage.subTop.desc')}</p>
                                        <p>{t('homepage.subTop.desc1')}</p>
                                        <Link to='/contacts' className='btn btn--green' onClick={() => window.scroll(2000,2000)}>
                                        {t('homepage.subTop.desc2')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='homepage__center'>
                            <div className='container'>
                                <div className='homepage__center-inner'>
                                    <h3 className='title'>{t('homepage.center.title')}</h3>
                                    <div className='homepage__center-wood'>
                                        <div className='homepage__center-wrapp'>
                                        <Link to='/product' onClick={() => window.scroll(0,1200)}> 
                                            <figure>
                                                <img src={center.img1}
                                                alt='Pellengreeno'
                                                title='Pellets'
                                                />
                                            </figure>
                                            </Link>
                                            <p>{t('homepage.center.desc')}</p>
                                        </div>
                                        <div className='homepage__center-wrapp'>
                                            <Link to='/product' onClick={() => window.scroll(0,600)}> 
                                            <figure>
                                                <img src={center.img}
                                                alt='Pellengreeno'
                                                title='Pellets'
                                                />
                                            </figure>
                                            </Link>
                                            <p>{t('homepage.center.desc1')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='homepage__slider'>
                            <div className='container'>
                                <div className='homepage__slider-inner'>
                                    <Carusel  />
                                    <div className='slider__block'>
                                        <div className='slider__block-txt'>
                                            <p>{t('slider-block.desc')}</p>
                                            <p>{t('slider-block.desc1')}</p>
                                            <p>{t('slider-block.desc2')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='homepage__bottom'>
                            <div className='container'>
                                <div className='homepage__bottom-inner'>
                                    <FormTel />
                                </div>
                            </div>
                        </section>
                    </>
        )
    }
}

//export default Homepage;
export default  withTranslation()(Homepage);