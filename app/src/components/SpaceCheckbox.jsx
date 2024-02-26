const SpaceCheckbox = () => {
  return (
    <div>
      <div className="flex items-center border border-gray rounded mt-4">
        <p className="font-semibold">lastName fistName </p>
        <input
          type="checkbox"
          value=""
          name="checkbox"
          class="w-5 h-5 border-gray rounded focus:ring-orange focus:ring-2"
        />
      </div>
    </div>
  );
};

export default SpaceCheckbox;
