import React, { useEffect, useRef } from "react";
import "./Contact.css";
import message from "../../assets/Contact/message.png";
import email from "../../assets/Contact/mail.png";
import phone from "../../assets/Contact/phone.png";
import location from "../../assets/Contact/location.png";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gisk89b_zurich",
        "template_45u1dxq_zurich",
        form.current,
        {
          publicKey: "xFX7lbU3Y_kHT7BOV",
        }
      )
      .then(
        () => {
          toast.success("Message Sent", {
            style: {
              background: "orange",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "orange",
            },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();

    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        dealay: 100,
      });
    }, []);
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={message} alt="" />
        </h3>
        <p>
          We’d love to hear from you! Whether you're interested in our
          construction services or looking to start an exciting career in the
          construction industry, we invite you to reach out.
          <p>
            <br />
            For potential clients, let us help turn your vision into reality
            with our expert construction solutions. Share your project details
            with us, send us a message.
          </p>
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            zurkonstrack@gmail.com
          </li>
          <li>
            <img src={phone} alt="" />
            +63 09178414443/09178351359
          </li>
          <li>
            <img src={location} alt="" />
            96 Amsterdam st Capitol Homes, brgy Matandang Balara Quezon City
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail} action="">
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
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
          <Toaster />
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
