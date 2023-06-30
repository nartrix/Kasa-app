import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/carrousel";

function Apartment() {
  const params = useParams();
  const [getApartment, setGetApartment] = useState();

  useEffect(() => {
    const getData = async () => {
      const getData = await axios.get("/data.json");
      const getKey = getData.data.find(({ id }) => id === params.id);
      getData.data.map(() => setGetApartment(getKey));
    };
    getData();
  }, [params.id]);

  const getPictures = getApartment && getApartment.pictures;
  return (
    getApartment && (
      <div key={params.id} className="apartment">
        <Carrousel slides={getPictures} />
        <div className="host">
          <div className="host-infos">
            <h1>{getApartment.title}</h1>
            <h3>{getApartment.location}</h3>
          </div>
        </div>
      </div>
    )
  );
}

export default Apartment;
