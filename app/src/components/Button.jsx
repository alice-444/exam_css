import { IoIosArrowRoundForward } from "react-icons/io";

const Button = () => {
  return (
    <div className="bg-orange-1 rounded-full text-orange flex items-center justify-center text-xl mt-8 py-2 px-4 duration-300">
      <span>intitulé</span>
      <IoIosArrowRoundForward className="text-orange-1" />
    </div>
  );
};

export default Button;
