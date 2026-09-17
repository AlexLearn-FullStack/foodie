import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@ui/button";
import { Plus } from "lucide-react";
import {
  ForkKnifeCrossed,
  Map, Podium,
  Sparkles, Share2
} from "lucide-react";


export default function Navbar () {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/")
  }
  
  
  return (
    <header>
      <div
        className="logo cursor-pointer"
        onClick={
          () => goHome()
        }
      >
        <Button className="btn">
          <ForkKnifeCrossed />
        </Button>
        <h1>
          Foodie
          <span>.</span>
        </h1>
      </div>

      <nav>
        <span>
          <Map className="badge-icon" />
          Map
        </span>

        <span>
          <Podium className="badge-icon" />
          Rank
        </span>

        <span>
          <Sparkles className="badge-icon" />
          Recap
        </span>

        <span>
          <Share2 className="badge-icon" />
          Share
        </span>

        <Button
          className="btn max-[640px]:rounded-sm"
        >
          <Plus className="text-muted" />
          <span
            className="max-[640px]:hidden"
          >
            Add a place
          </span>
        </Button>

        <ThemeToggle />

        <Button
          className="avatar"
        >
          AK
        </Button>
      </nav>
    </header>
  );
}