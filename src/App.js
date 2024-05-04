import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RoutesConfig from "./routes/RoutsConfig";
import "../src/pages/MoviesDetails.css";
import {LanguageContext} from './context/language'
import { useState ,useEffect} from "react";
function App() {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);
  return (
    <BrowserRouter>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Navbar />
        <RoutesConfig />
        </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
