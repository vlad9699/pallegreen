import React, { Component } from 'react'
import ImageZoom from 'react-medium-image-zoom'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import FormTel from './formTell'

class Product extends Component {
    render(){
        const { t, i18n } = this.props;


        const prod = t('palletInfo', {returnObjects: true}).map(e =>{
            return(
                <li className='product__top-item' key={e.title}>
                    <figure>
                        <img src={e.img}
                        alt='Pellegreeno'
                        title='Pellegreeno'
                        />
                    </figure>
                    <div className='product__top-txt'>
                        <h5>{e.title}</h5>
                        <p>{e.desc}</p>
                        <p>{e.desc1}</p>
                        <p>{e.desc2}</p>
                        <p>{e.desc3}</p>
                        <p>{e.desc4}</p>
                        <p>{e.desc5}</p>
                        <p>{e.desc6}</p>
                        <p>{e.desc7}</p>
                        <p><span>{e.price}</span></p>
                    </div>
                </li>
            )
        })
        return(
            <>
            <section className='product__top'>
                <div className='container'>
                    <div className='product__top-inner'>
                        <div className='product__top-about'>
                            <div className='product__top-title'>
                                <h3 className='title'>{t('product.top.title')}</h3>
                                <p>{t('product.top.desc')}</p>
                                <p>{t('product.top.desc1')}</p>
                                <p>{t('product.top.desc2')}</p>
                            </div>
                            <figure>
                                <img src={t('product.top.img')}
                                alt='Pellegreeno'
                                title='Pellegreeno'
                                />
                            </figure>
                        </div>
                        <div className='product__top-pallet'>
                            <ul className='product__top-list' id='pellets'>
                                {prod}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='product__center'>
                <div className='container'>
                    <div className='product__center-inner'>
                        <div className='product__center-txt'>
                            <h3 className='title'>{t('product.center.title')}</h3>
                            <p>{t('product.center.desc')}</p>
                        </div>
                        <div className='product__center-bag'>
                            <div className='product__center-one'>
                                <figure>
                                    <img src={t('product.center.img1')}
                                    alt='Pellegreeno'
                                    title='Pellegreeno bag'
                                    />
                                </figure>
                                <p>{t('product.center.desc1')}</p>
                            </div>
                            <div className='product__center-one'>
                                <figure>
                                    <img src={t('product.center.img')}
                                    alt='Pellegreeno'
                                    title='Pellegreeno bag'
                                    />
                                </figure>
                                <p>{t('product.center.desc2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='product__bottom'>
                <div className='container'>
                    <div className='product__bottom-inner'>
                        <div className='product__bottom-txt'>
                            <h3 className='title'>{t('product.bottom.title')}</h3>
                            <p>{t('product.bottom.desc')}</p>
                        </div>
                        <div className='product__bottom-list'>
                            <div className='product__bottom-image'>
                                <p>Pellegreeno</p>
                                <ImageZoom
                                image={{
                                    src: 'img/doc-p.png',
                                    alt: 'certificate',
                                    className: 'img-big',
                                    style: {width: '530px'}
                                }}
                                zoomImage={{
                                    src: 'img/doc-p.png',
                                    alt: 'certificate',
                                    
                                }}
                                />
                            </div>
                            <div className='product__bottom-image'>
                                <p>Pellegreeno Premium</p>
                                <ImageZoom
                                image={{
                                    src: 'img/doc-pp.png',
                                    alt: 'certificate',
                                    className: 'imgBig',
                                    style: {width: '530px'}
                                }}
                                zoomImage={{
                                    src: 'img/doc-pp.png',
                                    alt: 'certificate'
                                }}
                                />
                            </div>
                            <div className='product__bottom-image'>
                                <p>Certificate</p>
                                <ImageZoom
                                image={{
                                    src: 'img/doc-3.png',
                                    alt: 'certificate',
                                    className: 'imgBig',
                                    style: {width: '530px'}
                                }}
                                zoomImage={{
                                    src: 'img/doc-3.png',
                                    alt: 'certificate'
                                }}
                                />
                            </div>
                            <div className='product__bottom-image'>
                                <p>Certificate</p>
                                <ImageZoom
                                image={{
                                    src: 'img/doc-4.png',
                                    alt: 'certificate',
                                    className: 'imgBig',
                                    style: {width: '530px'}
                                }}
                                zoomImage={{
                                    src: 'img/doc-4.png',
                                    alt: 'certificate'
                                }}
                                />
                            </div>
                        </div>
                        <FormTel />
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default withTranslation()(Product);