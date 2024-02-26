import "@/styles/globals.css";
import Date from "@/components/Date.jsx";
import BurgerMenu from "@/components/BurgerMenu.jsx";

const App = ({ Component, pageProps }) => {
  return (
    <div className="p-4">
      <Date />
      <BurgerMenu />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
