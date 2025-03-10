import { useTranslation } from 'react-i18next';
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="overlay">
        <div className="contactinput">
          <small>{t('CONTACT')}</small>
          <h4>{t('FEEL_FREE_TO_CONTACT_US')}</h4>
          <div className="inputscontact">
            <input
              className="inputtext"
              type="text"
              name="fullname"
              placeholder={t('FULL_NAME')}
              id=""
            />
            <input
              className="inputemail"
              type="email"
              name="email"
              placeholder={t('EMAIL')}
              id=""
            />
            <input
              className="inputtext"
              type="text"
              name="tithe"
              placeholder={t('TITHE')}
              id=""
            />
            <input
              className="textarea"
              type="text"
              name="yourmessage"
              placeholder={t('YOUR_MESSAGE')}
              id=""
            />
          </div>
          <button className="sendbtn" type="submit">
            {t('SEND_YOUR_MESSAGE')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;