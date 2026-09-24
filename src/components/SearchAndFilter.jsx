import { useState } from "react";
import { Search } from "lucide-react";
import { CITYFILTER } from "@/constants";


export default function SearchAndFilter () {
  const [ searchedPlace, setSearchedPlace ] = useState('');
  const [ selectedCity, setSelectedCity ] = useState(CITYFILTER[0]);

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
        <label
          htmlFor="place-search"
          className="hidden"
        >
          Search your places
        </label>
        <input
          type="text"
          id="place-search"
          placeholder="Search your places"
          value={searchedPlace}
          onChange={
            (e) => setSearchedPlace(e.target.value)
          }
        />
      </form>

      <div className="filter-location">
        <label
          htmlFor="city-filter"
          className="hidden"
        >
          Filter by city
        </label>
        <select
          id="city-filter"
          className="city-toggle"
          value={selectedCity}
          onChange={
            (e) => setSelectedCity(e.target.value)
          }
          aria-label="Filter by city"
        >
          {
            CITYFILTER.map(
              (city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              )
            )
          }
        </select>
      </div>
    </section>
  )
}