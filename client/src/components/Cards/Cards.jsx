import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Cards.module.css";

const Cards = () => {
  const allCountries = useSelector((state) => state.country);
  const currentPage = useSelector((state) => state.currentPage);
  const pageSize = useSelector((state) => state.pageSize);

  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("name");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:3001/activities")
      .then(response => {
        setActivities(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching activities:", error);
      });
  }, []);

  const filterByContinent = (country, selectedContinent) => {
    return selectedContinent === "All" || country.continent === selectedContinent;
  };

  const filterByActivities = (country, selectedActivity) => {
    return selectedActivity === "All" || country.Activities.some(activity =>
      activity.name.toLowerCase() === selectedActivity.toLowerCase()
    );
  };


  const filterByName = (country, searchTerm) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const sortedCountries = [...allCountries].sort((a, b) => {
    if (sortBy === "name") {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    } else if (sortBy === "population") {
      const populationA = a.population;
      const populationB = b.population;
      return sortOrder === "asc" ? populationA - populationB : populationB - populationA;
    }
    return 0;
  });

  const filteredCountries = sortedCountries.filter((country) => {
    return (
      filterByName(country, searchTerm) &&
      filterByContinent(country, selectedContinent) &&
      filterByActivities(country, selectedActivity)
    );
  });

  const displayedCountries = filteredCountries.slice(startIndex, endIndex);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>
        <select
          value={selectedContinent}
          onChange={(event) => setSelectedContinent(event.target.value)}
        >
          <option value="All">All Continents</option>
          {Array.from(new Set(allCountries.map((country) => country.continent))).map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
        <select
          value={selectedActivity}
          onChange={(event) => setSelectedActivity(event.target.value)}
          >
          <option value="All">All Activities</option>
          {[...new Set(activities.flatMap(activity => activity.name))].map((activityName) => (
            <option key={activityName} value={activityName}>
              {activityName}
            </option>
          ))}
        </select>
      </div>
      <div className={style.Cards}>
      {displayedCountries.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          img={country.img}
          continent={country.continent}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
        />
      ))}
      </div>
    </div>
  );
};

export default Cards;
