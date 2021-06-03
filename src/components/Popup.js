import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next'

const Popup = props => {
  const { t, i18n } = props;
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__close" onClick={props.closePopup}></div>
        <h1 className="popup__title">{t('popUp.title')}</h1>
        <div className="popup__info">
          <div className="popup__content">
            <p>{t('popUp.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withTranslation()(Popup);
