import React, { useContext } from "react";
import FlagContext from "../context/FlagContext";
import ThemeContext from "../context/ThemeContext";
import ClearFilterButton from "./ClearFilterButton";
import { FlagCard } from "./FlagCard";
import { Loader } from "./Loader";
import { NavSearch } from "./NavSearch";

export const Flags = () => {
  const { db, continent, searchFlag, emptyFilter, Loading } = useContext(FlagContext);
  const { DarkTheme } = useContext(ThemeContext);


  const getDataFiltered = ({ region, name }) => {
    if (continent === null && searchFlag === "") return true;

    if (searchFlag !== "" && continent !== null) {
      //both not empty
      return name.common.includes(searchFlag) && region.includes(continent);
    }

    if (continent !== null) {
      return region.includes(continent);
    }

    if (searchFlag !== "") {
      return name.common.includes(searchFlag);
    }

  };

  const filterData = db.filter(getDataFiltered);
  return (
    <>
      <div className="containerFilters">
        <NavSearch />
      </div>

      <ClearFilterButton />
      {/* if condition search flag and empty filter are true it renders an error message  */}
      {searchFlag && emptyFilter && (
        <h2 className={DarkTheme ? "errorSearch darkMode" : "errorSearch"}>   "{searchFlag}" Not Found    </h2>
      )}

        {/* if loading is true loader is rendered */}
      {Loading && <Loader />}

      <div id="containerFlags">
        {db.length > 0 ? (
          // (dataa) ==> variable of data fetched
          filterData.map((dataa) => (
            <FlagCard
              key={dataa.name.common}
              name={dataa.name}
              flags={dataa.flags}
              population={dataa.population}
              region={dataa.region}
              capital={dataa.capital}
              cca2={dataa.cca2}

            />
          ))
        ) : (
          <h3 className={DarkTheme ? "fetchingData darkMode" : "fetchingData"}>
            Fetching Data...
          </h3>
        )}
      </div>
    </>
  );
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////