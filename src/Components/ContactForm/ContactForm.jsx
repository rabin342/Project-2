import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Rabin");
  const [email, setEmail] = useState("rabinregmi121@gmail.com");
  const [text, setText] = useState("I love Nepal");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIEW SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={< MdLocalPhone fontSize="24px" />} />
        </div>


        <Button
          isOutline={true}
          text="VIA EMAIL FORM" 
          icon={< MdEmail fontSize="24px" />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }} >
            <Button
              text="SUBMIT BUTTON" />
          </div>
          <div> {name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/Service-2.png" alt="contact image" />
      </div>
    </section>


  );
};

export default ContactForm;
