import HeaderEmployes from "@/components/HeaderEmployes.jsx";
import ListNames from "@/components/ListNames.jsx";

const DeleteEmployees = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl w-1/2 mb-5">Suppression d'employés</h1>
      <HeaderEmployes />
      <ListNames />
    </div>
  );
};

export default DeleteEmployees;
