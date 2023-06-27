function Card({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt="location" />
      <div className="card-content">
        <div className="title-apartment">{title}</div>
      </div>
    </div>
  );
}

export default Card;
