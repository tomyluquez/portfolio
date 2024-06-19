import ContactJson from "../../data/contact.data.json";
import { Contact } from "../../Models/contact.models";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="dark:bg-palette-900 bg-palette-200 text-center dark:text-palette-50 text-palette-900 grid gap-8 py-4 px-8 duration-300"
      id="contact"
    >
      <h5>Contacto</h5>
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-8">
        {ContactJson.contact.map((contact: Contact) => (
          <a
            className="flex md:flex-col gap-2 items-center hover:scale-105 duration-300"
            href={contact.href}
            target="_blank"
          >
            <i className={`fa-brands fa-${contact.icon}`}></i>
            <p key={contact.id}>{contact.title}</p>
          </a>
        ))}
      </div>
      <p className="text-slate-600 text-center mt-8">
        Copyright © {year} - Todos los derechos reservados
      </p>
    </footer>
  );
};
