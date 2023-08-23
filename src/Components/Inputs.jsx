const Inputs = ({ label, placeholder, register, errors, nameRegister }) => {
  return (
    <div className="mb-4">
      <label className="text-white block mb-2" htmlFor="nombre">
        {label}
        <span className="text-[10px] text-grisFont">*</span>
      </label>
      <input
        className="w-full px-3 text-gris py-2 bg-white rounded-md focus:outline-none focus:ring focus:border-naranja"
        type="text"
        id={label}
        name={label}
        placeholder={placeholder}
        {...register(nameRegister, {
          required: true,
          pattern: {
            value:
              label === "Email"
                ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                : true,
            message: "Ingresa un correo electrónico válido",
          },
        })}
      />
      {errors[nameRegister]?.type === "required" && (
        <span>Este campo es obligatorio</span>
      )}
      {errors[nameRegister]?.type === "pattern" && (
        <span>{errors[nameRegister]?.message}</span>
      )}
    </div>
  );
};

export default Inputs;
