const Button = ({ children, hover, text }) => {
  return (
    <button
      className={`px-8 py-4 border relative hover:bg-${hover} hover:text-${text} hover:border-negro duration-300`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
