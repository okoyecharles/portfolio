import { keyframes } from "@emotion/react";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import ContactForm from "./ContactForm";


const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2em);
  },
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

interface ContactProps {
  testmode: boolean,
}

const Contact: React.FC<ContactProps> = ({ testmode }) => {
  return (
    <section className="contact">
      <a id="contact"></a>
      <div className="contact__container">
        <h2 className="contact__header">Contact</h2>
        <div className="contact__content">
          <Reveal triggerOnce keyframes={slideUp} duration={1500}>
            <p className="contact__coa">
              If you have an <strong>application</strong> you are interested in
              developing, a <strong>feature</strong> that you need built or a{" "}
              <strong>project</strong> that needs coding. I'd love to help with
              it.
            </p>
          </Reveal>
          {!testmode && (<ContactForm />)}
        </div>
      </div>
    </section>
  );
};

export default Contact;
