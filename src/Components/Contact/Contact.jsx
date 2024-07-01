import React from "react";
import "./Contact.css";
import message from "../../assets/Contact/message.png";
import email from "../../assets/Contact/mail.png";
import phone from "../../assets/Contact/phone.png";
import location from "../../assets/Contact/location.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={message} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          incidunt numquam vitae, culpa ipsa est eum ipsum illo alias
          voluptatibus eius voluptatum nihil at rerum amet quasi. A, placeat
          amet.
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum
            blanditiis a fugiat, delectus mollitia!
          </p>
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            zurichemail@email.com
          </li>
          <li>
            <img src={phone} alt="" />
            zurich phone number
          </li>
          <li>
            <img src={location} alt="" />
            office address
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="phone"
            placeholder="example@email.com"
            required
          />
          <label>Your Message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
