import Header from "@/components/Header.jsx";
import Button from "@/components/Button.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";
import SpaceCheckbox from "@/components/SpaceCheckbox.jsx";

const TravailCuisine = () => {
  return (
    <main>
      <h1 className="font-bold text-4xl w-1/2">Qui travaille aujourd'hui ?</h1>
      <Header />
      <SpaceCheckbox />
      <div className="flex items-center">
        <Button title="Suivant" />
        <span className="flex items-center">
          <IoIosArrowRoundForward className="text-orange w-6 h-6 ml-2" />
        </span>
      </div>
    </main>
  );
};

export default TravailCuisine;
