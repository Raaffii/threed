import { useState, useEffect } from "react";
import Card from "./pages/Card";
import Navbar from "./pages/Navbar/Navbar";
import Banner from "./pages/LandingPage/Banner";
import Threed from "./pages/Threed/Threed";
import ThreedVid from "./pages/Threed/ThreedVid";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./pages/Footer/Footer";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("bro");
        const response = await fetch("http://localhost:3000/threed/getthreed");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setList(responseData.data);
      } catch (err) {
      } finally {
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirsItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirsItem, indexOfLastItem);

  return (
    <>
      <Navbar />
      <LandingPage />
      <Banner />
      <Threed />
      <ThreedVid />
      <Footer />
    </>
  );
}

export default App;
