import React, { Suspense, useState } from "react";
import "./ContactPage.css";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader/Loader";
import Pirate from "../models/Pirate";
import { BsSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrbitControls } from "@react-three/drei";
const ContactPage = () => {
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentAnimation("Emote_Dance_HulaHoop_T3");
    setIsSubmitting(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        toast.success("Message Sent Successfully!", {
          position: "top-center",
        });
        setTimeout(() => {
          setCurrentAnimation("Idle");
        }, 10000);
        setIsSubmitting(false);
      },
      (error) => {
        setCurrentAnimation("Death_Fwd");
        toast.error("Oops !! Message was not Successfully.", {
          position: "top-center",
        });
        setTimeout(() => {
          setCurrentAnimation("Idle");
        }, 3000);
        setIsSubmitting(false);
      }
    );
    e.target.reset();
  };
  const handleAnimation = (name) => setCurrentAnimation(name);
  return (
    <section className="contactpage-container">
      <div className="left">
        <div className="contact-container">
          <span>Get in Touch</span>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                onFocus={() => handleAnimation("Jog_Fwd")}
                onBlur={() => handleAnimation("Idle")}
                placeholder="Cap'n Jack Sparrow"
              />
            </div>
            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                onFocus={() => handleAnimation("UnderTow_Recall")}
                onBlur={() => handleAnimation("Idle")}
                placeholder="pirate@blackpearl.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                onFocus={() => handleAnimation("Emote_Taunt_PraiseMe_T1")}
                onBlur={() => handleAnimation("Idle")}
                placeholder="Write your words before they be lost at sea!"
              />
            </div>
            <button
              type="submit"
              className={`submit-button ${
                isSubmitting ? "sumbmit-active" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"} <BsSendFill />
            </button>
          </form>
        </div>
      </div>
      <div className="right">
        <Canvas style={{
          cursor:"grab"
        }} camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader flag={"pirate"} />}>
          <OrbitControls enableDamping enableZoom={false}/>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <spotLight angle={0.15} penumbra={1} intensity={2} />
            <Pirate currentAnimation={currentAnimation} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
export default ContactPage;
