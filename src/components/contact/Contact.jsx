import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/**Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            corrupti incidunt? Voluptas commodi repellat mollitia, ex ab esse
            saepe placeat totam quisquam enim. Et dolore voluptatibus ut,
            officiis error laborum!
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                </div>
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                </div>
            </div>
            <div className="flexStart row">
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video Now</div>
                </div>
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">021 123 145 14</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                </div>
            </div>
          </div>
        </div>
        {/**Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./home.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
