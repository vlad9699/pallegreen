import React, { Component } from 'react'
import Slider from "react-slick";
import { useTranslation, withTranslation, Trans } from 'react-i18next';


class Carusel extends Component {
    render(){
        const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: true,
            // centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            focusOnSelect: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 740,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    variableWidth: false,
                    centerPadding: "0px",
                  }
                }
              ]
          };
          const { t, i18n } = this.props;
        return(
            <Slider {...settings}>
                <div className='slider__item'>
                    <figure className='slider__figure'>
                        <img className='slider__img' src="img/slider-1.png" alt="Pellegreeno"/>
                    </figure>
                    <div className='slider__text'>
                        <h3>{t('slider.desc')}<span>{t('slider.sub')}</span></h3>
                    </div>
                </div>
                <div className='slider__item'>
                    <figure className='slider__figure'>
                        <img className='slider__img' src="img/slider-2.png" alt="Pellegreeno"/>
                    </figure>
                    <div className='slider__text'>
                        <h3>{t('slider.desc1')}<span>{t('slider.sub1')}</span></h3>
                    </div>
                </div>
                <div className='slider__item'>
                    <figure className='slider__figure'>
                        <img className='slider__img' src="img/slider-3.png" alt="Pellegreeno"/>
                    </figure>
                    <div className='slider__text'>
                        <h3>{t('slider.desc2')}<span>{t('slider.sub2')}</span></h3>
                    </div>
                </div>
                <div className='slider__item'>
                    <figure className='slider__figure'>
                        <img className='slider__img' src="img/slider-4.png" alt="Pellegreeno"/>
                    </figure>
                    <div className='slider__text'>
                        <h3>{t('slider.desc3')}<span>{t('slider.sub3')}</span></h3>
                    </div>
                </div>
                <div className='slider__item'>
                    <figure className='slider__figure'>
                        <img className='slider__img' src="img/slider-5.png" alt="Pellegreeno"/>
                    </figure>
                    <div className='slider__text'>
                        <h3>{t('slider.desc4')}<span>{t('slider.sub4')}</span></h3>
                    </div>
                </div>
            </Slider>
        )
    }
}
// export default  Carusel;
export default  withTranslation()(Carusel);
