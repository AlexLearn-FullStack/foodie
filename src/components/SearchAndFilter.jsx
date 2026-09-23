import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { CITYFILTER } from "@/constants";


export default function SearchAndFilter () {
  const [ searchedPlace, setSearchedPlace ] = useState('');
  const [ isCityMenuOpen, setIsCityMenuOpen ] = useState(false);
  const [ selectedCity, setSelectedCity ] = useState(CITYFILTER[0]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchedPlace.trim()) {
      return;
    }

    console.log(`Place: ${searchedPlace} - City: ${selectedCity}`);
    setSearchedPlace('')
  };
  
  return (
    <section id="search">
      <form
        className="searchbox"
        onSubmit={handleSearch}
      >
        <button
          type="submit"
          aria-label="Search"
        >
          <Search className="indicators" />
        </button>
        <input
          type="text"
          placeholder="Search your places"
          value={searchedPlace}
          onChange={
            (e) => setSearchedPlace(e.target.value)
          }
        />
      </form>

      <div className="filter-location">
        <button
          type="button"
          className="city-toggle"
          aria-expanded={isCityMenuOpen}
          aria-haspopup="listbox"
          aria-label="Filter by city"
          onClick={
            () => setIsCityMenuOpen((isOpen) => !isOpen)
          }
        >
          <span>{selectedCity}</span>
          <ChevronDown
            className={`indicators ${isCityMenuOpen ? "rotate-180" : ""}`}
          />
        </button>

        {
          isCityMenuOpen && (
            <ul
              className="city-menu"
              role="listbox"
              aria-label="Cities"
            >
              {
                CITYFILTER.map(
                  (city) => (
                    <li
                      key={city}
                      role="option"
                      aria-selected={selectedCity === city}
                    >
                      <button
                        type="button"
                        className="city-option"
                        onClick={
                          () => handleCitySelect(city)
                        }
                      >
                        {city}
                      </button>
                    </li>
                  )
                )
              }
            </ul>
          )
        }
      </div>
    </section>
  )
}