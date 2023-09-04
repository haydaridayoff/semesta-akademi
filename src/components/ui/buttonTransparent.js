const ButtonTransparent = ({ children, className }) => {
    return (
      <>
        <button
          className={`bg-transparent border border-gray-950 rounded-full px-4 py-2 text-black ${className}`}
        >
          {children}
        </button>
      </>
    );
};

export default ButtonTransparent;