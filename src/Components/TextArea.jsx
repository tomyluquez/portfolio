const TextArea = ({ label, placeholder, register, errors, nameRegister }) => {
  return (
    <div className="mb-4">
      <label className="text-white block mb-2" htmlFor="nombre">
        {label}
        <span className="text-[10px] text-grisFont">*</span>
      </label>
      <textarea
        className="w-full text-gris px-3 py-2 bg-white rounded-md focus:outline-none focus:ring focus:border-naranja-500"
        id={label}
        name={label}
        rows="5"
        placeholder={placeholder}
        {...register(nameRegister, { required: true })}
      />
      {errors[nameRegister]?.type === "required" && (
        <span>Este campo es obligatorio</span>
      )}
    </div>
  );
};

export default TextArea;
