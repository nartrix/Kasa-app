import { useState } from "react";
import arrow from "../../asset/arrow_back_ios-24px 3.svg";

function Collapse(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div onClick={toggle} className="collapse-content">
        <h2>{props.aboutTitle}</h2>
        <img
          className={open ? "arrow" : "arrow rotated"}
          src={arrow}
          alt="chevron"
        />
      </div>
      {open && (
        <div className="collapse-toggle">
          <p>{props.aboutText}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
