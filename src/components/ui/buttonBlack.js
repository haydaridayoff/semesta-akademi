  const ButtonBlack = ({ children, className }) => {
    return (
      <>
        <button
          className={`bg-gray-950 rounded-full px-4 py-2 text-white ${className}`}
        >
          {children}
        </button>
      </>
    );
  };

  export default ButtonBlack;