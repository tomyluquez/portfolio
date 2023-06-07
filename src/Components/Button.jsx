const Button = ({ text, hover, color }) => {
  return (
    <button
      className={`px-8 py-4 border relative ${hover} ${color} duration-300`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
