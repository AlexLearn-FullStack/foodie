import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Rank from "@/pages/Rank";
import Recap from "@/pages/Recap";
import Share from "@/pages/Share";
import NotFound from "@/pages/NotFound";


export default function App () {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          index
          element={ <Home /> }
        />
        
        <Route
          path="/rank"
          element={ <Rank /> }
        />
        
        <Route
          path="/recap"
          element={ <Recap /> }
        />
        
        <Route
          path="/share"
          element={ <Share /> }
        />

        <Route
          path="*"
          element={ <NotFound /> }
        />
      </Routes>
    </>
  )
}