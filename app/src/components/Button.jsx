const Button = ({ title }) => {
  return (
    <div className=" rounded-full text-orange flex items-center justify-center text-xl mt-8 py-2 px-4 duration-300 font-bold">
      <span>{title}</span>
    </div>
  );
};

export default Button;
