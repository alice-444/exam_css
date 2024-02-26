import { Inter } from "next/font/google";
import Header from "@/components/Header.jsx";
import Button from "@/components/Button.jsx";
import SpaceCheckbox from "@/components/SpaceCheckbox.jsx";

const inter = Inter({ subsets: ["latin"] });

const TravailSalle = () => {
  return (
    <main className={`${inter.className}`}>
      <h1 className="font-bold text-4xl w-1/2">Qui travaille aujourd'hui ?</h1>
      <Header />
      <SpaceCheckbox />
      <Button title="Suivant" />
    </main>
  );
};

export default TravailSalle;
