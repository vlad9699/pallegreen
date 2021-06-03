import React, { Component } from 'react'
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import FormTel from './formTell';

class About extends Component {
    render(){
 const { t, i18n } = this.props;

        const {top} = window.secondPage
        // const adv = [...window.advantages]

        // var gogo = i18n.t('aboutList', { returnObjectTrees: false });
        // console.log(gogo)


        const preference = t('aboutList', {returnObjects: true}).map(e =>{
            return(
                <li className='about__center-item' key={e.title}>
                    <div className='about__center-txt'>
                        <h5>{e.title}</h5>
                        <p>{e.desc}</p>
                    </div>
                    <figure>
                        <img src={e.img}
                        alt='Pallegreeno'
                        title='Pallegreeno'
                        />
                    </figure>
                </li>
            )
        })
        return(
                <>
                    <section className='about__top'>
                        <div className='container'>
                            <div className='about__top-inner'>
                                <div className='about__top-title'>
                                    <h3 className='title'>{t('about.top.title')}</h3>
                                    <p>{t('about.top.desc')}</p>
                                    <p>{t('about.top.desc1')}</p>
                                    <p>{t('about.top.desc2')}</p>
                                </div>
                                <figure>
                                    <img src={top.img}
                                    alt='Pallegreeno'
                                    title='Pallegreeno'
                                    />
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section className='about__center'>
                        <div className='container'>
                            <div className='about__center-inner'>
                                <h3 className='title'>{t('about.center.title')}</h3>
                                <ul className='about__center-list'>
                                    {preference}
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className='about__bottom'>
                        <div className='container'>
                            <div className='about__bottom-inner'>
                                <FormTel />
                            </div>
                        </div>
                    </section>
                </>
        )
    }
}
export default  withTranslation()(About);