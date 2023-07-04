import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel";
import Tag from "../../components/tag";
import Collapse from "../../components/collapse/";
import Stars from "../../components/stars";
import ApartmentHost from "../../components/apartment-host";

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

  return (
    getApartment && (
      <div key={params.id} className="apartment">
        <Carrousel slides={getPictures} />
        <div className="apartment-content">
          <div className="apartment-infos">
            <div className="apartment-titleLocation">
              <h1>{getApartment.title}</h1>
              <h3>{getApartment.location}</h3>
            </div>
            <div className="apartment-tags">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="apartment-infosHost">
            <Stars rate={getApartment.rating} />
            <ApartmentHost
              hostTitle={getApartment.host.name}
              hostPicture={getApartment.host.picture}
            />
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
