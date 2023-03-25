import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const deleteTour = (id) => {
    const newTour = tour.filter((tours) => tours.id !== id);
    setTour(newTour);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const fetchData = await fetch(url);
      const tour = await fetchData.json();
      setTour(tour);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (tour.length === 0) {
    return (
      <main>
        <h1>no tours left</h1>
        <button onClick={() => fetchData()}>refresh</button>
      </main>
    );
  }

  return (
    <main>
      <Tours tour={tour} deleteTour={deleteTour} />
    </main>
  );
};
export default App;
