import AboutBanner from "../../components/about-banner/aboutBanner";
import Collapse from "../../components/collapse/collapse";
import aboutData from "../../datas/aboutdata.json";

function About() {
  return (
    <div className="A-propos">
      <AboutBanner />
      {aboutData.map((data, id) => (
        <Collapse
          key={id}
          aboutTitle={data.aboutTitle}
          aboutText={data.aboutText}
        />
      ))}
    </div>
  );
}

export default About;
