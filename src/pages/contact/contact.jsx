import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="overlay">
        <div className="contactinput">
          <small>CONTACT</small>
          <h4>Feel free to Contact Us</h4>
          <div className="inputscontact">
            <input
              className="inputtext"
              type="text"
              name="fullname"
              placeholder="Full name"
              id=""
            />
            <input
              className="inputemail"
              type="email"
              name="email"
              placeholder="E-mail"
              id=""
            />
            <input
              className="inputtext"
              type="text"
              name="tithe"
              placeholder="Tithe"
              id=""
            />
            <input
              className="textarea"
              type="text"
              name="yourmessage"
              placeholder="Your message"
              id=""
            />
          </div>
            <button className="sendbtn" type="submit">
              SEND YOUR MESSAGE
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
