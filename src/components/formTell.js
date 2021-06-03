import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';


const FormTel = props => {
    const { t, i18n } = props;
    const {bottom }  = window.firstPage
    return(
        <div className='homepage__bottom-title'>
            <p>{t('homepage.bottom.desc')}</p>
            <p>{t('homepage.bottom.desc1')}</p>
            <p>+48 662 840 762</p>
            <Link to='/contacts' className='btn btn--green'>
            {t('homepage.bottom.desc2')}
            </Link>
        </div>
    )
}

export default  withTranslation()(FormTel);