import Places from "@/components/Places";
import SearchAndFilter from "@/components/SearchAndFilter";
import SitePromise from "@/components/SitePromise";


export default function Home () {
  
  return (
    <main id="home">
      <section id="sidebar">
        <Places places={10} ranked={4} />
        
        <SearchAndFilter />
        
        <SitePromise />
      </section>
      <section id="map"></section>
    </main>
  )
}