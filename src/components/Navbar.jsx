import { cn } from "cn";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@ui/button";
import {
  ForkKnifeCrossed,
  Map, Podium,
  Sparkles, Share2,
  Plus
} from "lucide-react";


const Nav = ({ className, linkClassName }) => {
  return (
    <nav className={cn(className)}>
      <Link
        to="/"
        className={cn(linkClassName)}
        aria-label="View map"
      >
        <Map className="badge-icon" />
        Map
      </Link>
      <Link
        to="/rank"
        className={cn(linkClassName)}
        aria-label="Restaurant rankings"
      >
        <Podium className="badge-icon" />
        Rank
      </Link>
      <Link
        to="/recap"
        className={cn(linkClassName)}
        aria-label="Places you've been to"
      >
        <Sparkles className="badge-icon" />
        Recap
      </Link>
      <Link
        to="/share"
        className={cn(linkClassName)}
        aria-label="Share favorite places"
      >
        <Share2 className="badge-icon" />
        Share
      </Link>
    </nav>
  );
}


export default function Navbar () {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/")
  }

  const enableDock = useMediaQuery({
    query: "(max-width: 768px)"
  })
  
  
  return (
    <>
      <header>
        <div
          className="logo cursor-pointer"
          onClick={
            () => goHome()
          }
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              goHome();
            }
          }}
        >
          <Button className="btn">
            <ForkKnifeCrossed />
          </Button>
          <h1>
            Foodie
            <span>.</span>
          </h1>
        </div>
        <div className="nav-elements">
          {
            !enableDock && <Nav />
          }

          <Button
            className="btn max-[640px]:rounded-sm"
            aria-label="Add a new place"
          >
            <Plus className="text-muted" />
            <span className="max-[640px]:hidden">Add a place</span>
          </Button>

          <ThemeToggle />

          <Button
            className="avatar"
            aria-label="View user"
          >
            AK
          </Button>
        </div>
      </header>

      {
        enableDock
          && 
            <Nav
              className="fixed bottom-0 left-0 right-0 bg-background flex justify-around items-center p-3 px-6 border-t"
              linkClassName="cursor-pointer flex flex-col items-center"
            />
      }
    </>
  );
}