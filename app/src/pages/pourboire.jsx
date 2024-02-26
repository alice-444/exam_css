import Button from "../components/Button.jsx";
const pourboire = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl w-1/2 mb-5">Ajouter un pouboire</h1>

      <form>
        <div className="mb-4">
          <label className="text-orange font-bold block mb-2">
            Nom de la table
          </label>
          <input
            type="text"
            name="nameTable"
            placeholder="Cerise"
            className="border rounded-md px-3 py-2 bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="text-orange font-bold block mb-2">
            Montant du pourboire
          </label>
          <input
            type="number"
            name="montantPouboire"
            placeholder="3"
            className="border border-gray-100 rounded-md px-3 py-2 bg-gray-100"
          />
        </div>

        <div className="flex space-x-5 mt-5 items-center justify-center">
          <button className="border border-orange rounded-full px-6 py-1 text-orange text-lg">
            0.50
          </button>
          <button className="border border-orange rounded-full px-6 py-1 text-orange text-lg">
            1.00
          </button>
          <button className="border border-orange rounded-full px-6 py-1 text-orange text-lg">
            2.00
          </button>
        </div>

        <Button title="Ajouter le pourboire" />
      </form>
    </div>
  );
};

export default pourboire;
