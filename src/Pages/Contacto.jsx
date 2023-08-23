import FormContact from "../Components/FormContact";

const Contacto = ({ setOpenAlert }) => {
  return (
    <section id="Contacto" className="grid place-items-center mt-36 mb-24">
      <FormContact setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default Contacto;
