import React from "react";
import "./style.scss";
import thumb_phone from "../../assets/images/contact01.png";
import thumb_mail from "../../assets/images/contact02.png";

const Contact = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="grid">
          <div className="speaker-banner-content">
            <h2 className="title">contact us</h2>
            <ul>
              <li>
                <a href="#">Home </a>
              </li>
              <li>
                <span>Contact us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="contact-container">
        <div className="bg_thumb bg_img"></div>
        <div className="grid">
          <div className="contact-section">
            <div className="contact-left">
              <div className="section-header-3">
                <span className="cate">contact us</span>
                <h2 className="title">get in touch</h2>
                <p>
                  We’d love to talk about how we can work together. Send us a
                  message below and we’ll respond as soon as possible.
                </p>
              </div>
              <form className="contact-form">
                <div className="form-group">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Your Full Name" />
                </div>
                <div className="form-group">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Your Email" />
                </div>
                <div className="form-group">
                  <label>
                    Subject <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter Your Subject" />
                </div>
                <div className="form-group">
                  <label>
                    Message <span>*</span>
                  </label>
                  <textarea placeholder="Enter Your Message"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Send Message" />
                </div>
              </form>
            </div>
            <div className="contact-right">
              <div className="padding-top padding-bottom contact-info">
                <div className="info-area">
                  <div className="info-item">
                    <div className="info-thumb">
                      <img src={thumb_phone} alt="contact" />
                    </div>
                    <div className="info-content">
                      <h6 className="title">phone number</h6>
                      <a href="Tel:82828282034">+1234 56789</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-thumb">
                      <img src={thumb_mail} alt="contact" />
                    </div>
                    <div className="info-content">
                      <h6 className="title">Email</h6>
                      <a href="Mailto:info@gmail.com">info@Boleto .com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-container ">
        <div className="grid">
          <div className="counters">
            <div className="group-counter ">
              <div className="contact-counter-item active">
                <div className="contact-counter-thumb">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title">
                      812182K
                    </h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="group-counter">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title">
                      812182K
                    </h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="group-counter">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title">
                      812182K
                    </h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
            <div className="group-counter">
              <div className="contact-counter-item">
                <div className="contact-counter-thumb">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="contact-counter-content">
                  <div className="counter-item">
                    <h5 className="title">
                      812182K
                    </h5>
                  </div>
                  <p>Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
