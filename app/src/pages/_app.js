import "@/styles/globals.css";
import Date from "@/components/Date.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const App = ({ Component, pageProps }) => {
  return (
    <div className="p-4">
      <Date />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
