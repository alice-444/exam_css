import { Inter } from "next/font/google";
import Header from "@/components/Header.jsx";
import Button from "@/components/Button.jsx";
import Service from "@/components/Service.jsx";
import SpaceCheckbox from "@/components/SpaceCheckbox.jsx";

const TravailSalle = () => {
  return (
    <main className="">
      <h1 className="font-bold text-4xl w-1/2">Recapitulatif du service</h1>
      <Header />
      <h2 className="text-orange font-bold text-2xl flex items-center justify-center mt-5">
        Employés sélectionnés
      </h2>
      <SpaceCheckbox />

      <Service />
      <Button title="Commencer le service !" />
    </main>
  );
};

export default TravailSalle;
