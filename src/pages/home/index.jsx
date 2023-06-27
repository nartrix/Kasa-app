import Card from "../../components/card";

function Home() {
  return (
    <div className="home">
      <div className="section-background">
        <div className="background-img">
          <div className="section-content">
            <h1 className="title">
              Chez vous,
              <br />
              partout et ailleurs
            </h1>
          </div>
        </div>
      </div>

      <div className="section-card">
        <Card />
      </div>
    </div>
  );
}

export default Home;
