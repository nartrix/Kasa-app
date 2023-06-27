import { useEffect, useState } from "react";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "../../components/banner";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
  }, []);

  return (
    <div className="home">
      <Banner />

      <div className="section-card">
        {data.map((appart, id) => (
          <div className="cards" key={id}>
            <Link className="link-card" to={`/logement/${appart.id}`}>
              <Card cover={appart.cover} title={appart.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
