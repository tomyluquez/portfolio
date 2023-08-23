import { useForm } from "react-hook-form";
import Inputs from "./Inputs";
import TextArea from "./TextArea";
import { sendEmail } from "../Services/sendEmail";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FormContact = ({ setOpenAlert }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    sendEmail(data).then((res) => {
      if (res.status === 200) {
        setOpenAlert(true);
        reset();
        setLoading(false);
      }
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] md:w-1/2 bg-gris p-6 md:p-8 rounded-lg shadow-md font-roboto"
    >
      <h2 className="text-2xl text-white mb-4">Contactame</h2>
      <Inputs
        label="Nombre"
        register={register}
        errors={errors}
        nameRegister="nameContact"
        placeholder="Tu Nombre"
      />
      <Inputs
        label="Email"
        register={register}
        errors={errors}
        nameRegister="mailContact"
        placeholder="Tu Email"
      />
      <TextArea
        label="Mensaje"
        register={register}
        errors={errors}
        nameRegister="messageContact"
        placeholder="Tu Mensaje"
      />
      <button
        type="submit"
        className="bg-naranja text-white py-2 px-4 rounded-full hover:bg-naranjaFont transition duration-300"
      >
        {loading ? <AiOutlineLoading3Quarters className="spinner" /> : "Enviar"}
      </button>
    </form>
  );
};

export default FormContact;
