import HouseList from "../components/houses/HouseList";
import { useState, useEffect } from "react";

function Houses() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedHouse, setLoadedHouse] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://127.0.0.1/housedata/")
      .then((response) => {
        //read the data
        return response.json();
      })
      .then((data) => {
        const houses = [];

        for (const key in data) {
          const house = {
            id: key,
            ...data[key],
          };

          houses.push(house);
        }

        setIsLoading(false);
        setLoadedHouse(houses);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>House list</h1>
      <HouseList houses={loadedHouse} />
    </section>
  );

  return;
}

export default Houses;
