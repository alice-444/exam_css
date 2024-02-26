import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-center items-center mt-4">
      <div className="flex flex-row space-x-6">
        <Link
          href="/travailSalle"
          className="text-grey text-lg font-semibold hover:text-black hover:bg-grey hover:rounded mr-4 transition-all
          duration-300"
        >
          salle
        </Link>
        <Link
          href="/travailCuisine"
          className="text-grey text-lg font-semibold hover:text-black hover:bg-grey hover:rounded mr-4 transition-all
          duration-300"
        >
          cuisine
        </Link>
      </div>
    </nav>
  );
};

export default Header;
