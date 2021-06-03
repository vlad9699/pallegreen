import React, { Component } from "react";
import InputMask from "react-input-mask";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Popup from "./Popup";
import Map from "./Map"

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.phone = React.createRef();
  }
  state = {
    showPopup: false,
    validation: {
      name: false,
      email: false,
      phone: false
    }
  };

  onSubmit = e => {
    const form = e.target;
    e.preventDefault();
    // fetch('http://new.oscorp.pro/ajax/feedback.php', {method: 'POST', body: new FormData(form)})
    fetch("/ajax/feedback.php", {
      method: "POST",
      body: new FormData(form)
    }).then(() => {
      this.clearFeedback(form);
      this.togglePopup();
    });
  };
  togglePopup() {
    const { showPopup } = this.state;
    this.setState({
      showPopup: !showPopup
    });
  }
  clearFeedback(form) {
    const validation = {
      ...this.state.validation
    };
    for (let key in validation) validation[key] = false;
    form.reset();
    this.phone.current.value = ""; // because using mask-component :(
    this.setState({
      validation
    });
  }

  handleValidation = e => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const emailRegExp = / /;
    const validation = {
      ...this.state.validation
    };
    e = e.target;
    switch (e.name) {
      case "name":
        validation.name = e.value.trim() !== "";
        break;
      case "email":
        validation.email = emailRegExp.test(e.value);
        break;
      case "phone":
        validation.phone =
          /\d/.test(e.value[e.value.length - 1]) && !/_/.test(e.value);
        break;
      default:
    }
    this.setState({
      validation
    });
  };

  render() {
    const { t, i18n } = this.props;
    const {
      validation: { name, email, phone },
      validation,
      showPopup
    } = this.state;
    const isValid = Object.values(validation).every(v => v === true);
    showPopup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
    const contactsAll = t('contactsInfo', {returnObjects: true}).map(e => {
      return (
        <li className="contacts__item" key={e.title}>
          <h5>{e.title1}</h5><h5> {e.title} </h5> <p> {e.desc} </p> <p> {e.desc1} </p>{" "}
          <p> {e.desc2} </p> <p> {e.desc3}</p> <p> {e.desc4}</p> {" "}
        </li>
      );
    });
    return (
      <section className="contacts">
        {" "}
        {showPopup ? (
          <Popup closePopup={this.togglePopup.bind(this)} />
        ) : null}{" "}
        <div className="container">
          <div className="contacts__inner">
            <div className="contacts__title">
              <h3 className="title">{t('contacts.top.title')} </h3> <p> {t('contacts.top.desc')} </p>{" "}
            </div>{" "}
            <Map />
            <ul className="contacts__list"> {contactsAll} </ul>{" "}
          </div>{" "}
          <div className='feedback__inner'>
            <form className="feedback__form" onSubmit={this.onSubmit}>
              <h3 className="feedback__title">{t('contactForm.title')}</h3>{" "}
              <label>{t('contactForm.desc')}</label>{" "}
              <input
                name="name"
                type="text"
                onChange={this.handleValidation}
                className={name ? "valid" : ""}
                autoComplete="off"
              />
              <label>E-mail</label>{" "}
              <input
                name="email"
                type="email"
                onChange={this.handleValidation}
                className={email ? "valid" : ""}
                autoComplete="off"
              />
              <label>{t('contactForm.desc1')}</label>{" "}
              <InputMask
                name="phone"
                type="tel"
                onChange={this.handleValidation}
                className={phone ? "valid" : ""}
                placeholder="+38(0__)__-__-___"
                // mask="+99(999)99-99-999"
                ref={this.phone}
              />{" "}
              <label>{t('contactForm.desc2')}</label>
              <textarea
              name="text"
              ></textarea>
              <button
                className="btn btn--green"
                type="submit"
                disabled={!isValid}
              >
                {" "}
                {t('contactForm.desc3')}{" "}
              </button>{" "}
            </form>{" "}
          </div>
        </div>{" "}
      </section>
    );
  }
}

export default withTranslation()(Contacts);
