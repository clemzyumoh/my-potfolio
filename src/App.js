import "./App.css";
import BlurEffect from "./Components/BlurEffect";
import Nav from "./Components/Nav";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import Loading from "./Components/Loading";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="wrapper    ">
      <main className="  h-screen pb-14 lg:pb-0 text-white relative ">
        {loading && <Loading />}
        <BlurEffect />
        <Nav />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <ScrollToTop/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
