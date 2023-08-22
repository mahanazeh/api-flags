import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Borders = ({ border }) => {
  const [nameBorder, setnameBorder] = useState();
  let { flag } = useParams();

  useEffect(() => {
    if (border === "None") {
      setnameBorder("None");
    } else {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => (res.ok ? res.json() : Promise.reject()))
        .then((dataa) => {
          setnameBorder(dataa[0].name.common);
        });
    }
  }, [flag, border, nameBorder]);

  return (
    <>
      <Link to={`../flags/${border}`}>{nameBorder}</Link>
    </>
    //It constructs the URL path for the linked page by appending the border value to ../flags/. 
    //This means that when the link is clicked, it will navigate to a page with the /flags/${border} URL path.
  );
};


///////////////////////////////////////////////////////////////////////////////////////////////////////