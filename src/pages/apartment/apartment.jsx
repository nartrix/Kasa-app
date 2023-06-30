import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/carrousel";
import Tag from "../../components/tag/tag";

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
  const tags = getApartment && getApartment.tags;

  const styleHostTag = {
    display: "flex",
    gap: "10px",
    margin: "20px",
  };

  const styleHostInfos = {
    margin: "20px",
  };

  return (
    getApartment && (
      <div key={params.id} className="apartment">
        <Carrousel slides={getPictures} />
        <div className="host">
          <div className="host-infos" style={styleHostInfos}>
            <h1>{getApartment.title}</h1>
            <h3>{getApartment.location}</h3>
          </div>
          <div className="host-tags" style={styleHostTag}>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default Apartment;
