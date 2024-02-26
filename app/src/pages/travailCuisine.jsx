import { Inter } from "next/font/google";
import Header from "@/components/Header.jsx";
import Button from "@/components/Button.jsx";
import SpaceCheckbox from "@/components/SpaceCheckbox.jsx";

const inter = Inter({ subsets: ["latin"] });

const TravailCuisine = () => {
  return (
    <main className={`${inter.className}`}>
      <h1 className="font-bold text-3xl">Qui travaille aujourd'hui ?</h1>
      <Header />
      <SpaceCheckbox />
      <Button>Suivant</Button>
    </main>
  );
};

export default TravailCuisine;
