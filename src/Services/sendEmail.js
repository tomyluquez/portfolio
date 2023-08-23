import emailjs from "@emailjs/browser";

export const sendEmail = (data) => {
  return emailjs
    .send(
      "service_31zoaq8",
      "template_j0vimds",
      {
        from_name: data.nameContact,
        message: data.messageContact,
        from_email: data.mailContact,
      },
      "yjnMEwyiByxM26fSg"
    )
    .then((res) => res);
};
