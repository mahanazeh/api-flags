import { createContext, useEffect, useState } from "react";

const FlagContext = createContext();

const FlagProvider = ({ children }) => {

  const [db, setDb] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [searchFlag, setSearchFlag] = useState("");
  const [disabledOptions, setDisabledOptions] = useState(false);
  const [continent, setContinent] = useState(null);
  const [emptyFilter, setemptyFilter] = useState(true);



  useEffect(() => {
    setLoading(true);
    let url = "https://restcountries.com/v3.1/all";

    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((dataa) => {
        // the second .then callback in the promise chain. It receives the parsed JSON data as ((dataa)).
        setLoading(false);
        //loading data false after successful response
        setDb(dataa);
      });
    
  }, []);
  // array fadya 3shan awel mafta7 teshtghl

  useEffect(() => {
    const data = document.querySelectorAll(".flag");
    if (data.length === 0) {
      setemptyFilter(true);
    } else {
      setemptyFilter(false);
    }
    //console.log("hi")
  }, [searchFlag]); 

  // array fyha searchflag 3shan awel ma asearch flag teshtghl + awel maftah

  //search
  const handleFlagSearch = (e) => {
    setSearchFlag(e.target.value);
  };

  //filter options
  const handleShowOptions = () =>
    !disabledOptions ? setDisabledOptions(true) : setDisabledOptions(false);


    //choose region (filter)
  const handleChooseContinent = (continet) => {
    setContinent(continet);
    setDisabledOptions(false);
  };

  const data = {
    db,
    setDb,
    Loading,
    setLoading,
    searchFlag,
    setSearchFlag,
    disabledOptions,
    setDisabledOptions,
    continent,
    setContinent,
    emptyFilter,
    handleFlagSearch,
    handleShowOptions,
    handleChooseContinent,
  };

  return <FlagContext.Provider value={data}> {children} </FlagContext.Provider>;
};

export { FlagProvider };
export default FlagContext;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
