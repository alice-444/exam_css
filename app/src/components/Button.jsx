import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ title }) => {
  return (
    <div className="bg-[#FF6B40] rounded-full text-orange flex items-center justify-center text-xl mt-8 py-2 px-4 duration-300">
      <span>{title}</span>
    </div>
  );
};

export default Button;
