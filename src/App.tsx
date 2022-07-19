import { useState } from "react";
import "./App.css";
import SearchPhoto from "./components/SearchPhoto";
import PhotoList from "./components/PhotoList";
import { getPhotoRequest } from "./Services/httpRequests";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const setTerm = async (term: string) => {
    setLoading(true);
    try {
      const { data } = await getPhotoRequest(term);
      setLoading(false);
      setPhotos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchPhoto setTerm={(term: string) => setTerm(term)} />
      <PhotoList photos={photos} />
      {loading && <Loading />}
    </>
  );
};

export default App;
