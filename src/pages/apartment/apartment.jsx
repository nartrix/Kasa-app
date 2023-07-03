import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel";
import Tag from "../../components/tag";
import Collapse from "../../components/collapse/";
import Stars from "../../components/stars";

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
  const equipments = getApartment && getApartment.equipments;
  const equipment =
    getApartment &&
    equipments.map((item, index) => (
      <li key={index} className="equipment-list">
        {item}
      </li>
    ));

  const styleHostTag = {
    display: "flex",
    gap: "10px",
    margin: "10px 20px",
  };

  const styleHostInfos = {
    margin: "0px 20px",
  };

  const styleHostTitle = {
    color: "#ff6060",
    fontSize: "18px",
    margin: "0px",
  };

  const styleHostLocation = {
    color: "#ff6060",
    fontSize: "14px",
    margin: "0px",
  };

  return (
    getApartment && (
      <div key={params.id} className="apartment">
        <Carrousel slides={getPictures} />
        <div className="apartment-container">
          <div className="apartment-content">
            <div className="apartment-infos" style={styleHostInfos}>
              <h1 style={styleHostTitle}>{getApartment.title}</h1>
              <h3 style={styleHostLocation}>{getApartment.location}</h3>
            </div>
            <div className="apartment-tags" style={styleHostTag}>
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="apartment-host">
            <Stars rate={getApartment.rating} />
          </div>
        </div>
        <div className="apartment-description">
          <Collapse
            aboutTitle="Description"
            aboutText={getApartment.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equipment} />
        </div>
      </div>
    )
  );
}

export default Apartment;
