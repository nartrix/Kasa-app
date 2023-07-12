function ApartmentHost(props) {
  return (
    <div className="apartment-host">
      <p className="host-name">{props.hostTitle}</p>
      <div className="host-picture">
        <img src={props.hostPicture} alt={props.id} />
      </div>
    </div>
  );
}

export default ApartmentHost;
