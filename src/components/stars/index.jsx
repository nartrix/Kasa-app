import starFullImg from "../../asset/star-full.svg";
import starEmptyImg from "../../asset/star-empty.svg";

function Stars({ rate }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {stars.map((level) =>
        rate >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={starFullImg}
            alt="rating star"
          />
        ) : (
          //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={level.toString()}
            className="star"
            src={starEmptyImg}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}

export default Stars;
