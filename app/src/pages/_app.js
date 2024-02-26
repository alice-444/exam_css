import Date from "@/components/Date";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="p-4">
      <Date />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
