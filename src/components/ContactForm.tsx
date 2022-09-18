import React from "react";
import { TextField } from "@mui/material";

// Styles to be applied to material ui provided text field
const rootTextFieldStyles = {
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.75) !important',
  },
  '& .MuiInputBase-input': {
    color: 'rgba(255, 255, 255, 0.75)',
    background: 'transparent',
  },
  '& .MuiInputBase-input:-webkit-autofill, & .MuiInputBase-input:-webkit-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.75)',
  },
  '& .MuiInputBase-root:hover > fieldset.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.65)',
  },
  '& :is(.MuiInputBase-input, textarea):focus ~ fieldset.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.75)',
  },
}

const ContactForm: React.FC = () => {
  return (
      <form action="https://formspree.io/f/mdobbbnd" method="post" className="contactForm">
        <TextField
          sx={rootTextFieldStyles}
          name="Name"
          id="contactForm-name"
          label="Name"
          variant="outlined"
          type="text"
          required
        />
        <TextField
        sx={rootTextFieldStyles}
          id="contactForm-email"
          name="Email"
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
        sx={rootTextFieldStyles}
          id="contactForm-message"
          name="Message"
          label="Message"
          variant="outlined"
          type="text"
          required
          multiline
          minRows={4}
          maxRows={6}
        />
        <button type="submit">Get In Touch</button>
      </form>
  );
};

export default ContactForm;
