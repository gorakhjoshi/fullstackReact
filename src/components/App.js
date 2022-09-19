import illustration_box from "../images/illustration-box-desktop.svg";
import illustration_woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "../images/illustration-woman-online-mobile.svg";
import Accordion from "./Accordion";
import { questionAnswers } from "../data/questionAnswer";

const App = () => {
  return (
    <main className="container">
      <article className="component">
        <div className="illustration">
          <img
            src={illustration_box}
            alt="illustration with box"
            className="illustration__box"
          />
          <img
            src={illustration_woman_desktop}
            alt="illustration with women"
            className="illustration__woman-desktop"
          />
          <img
            src={illustration_woman_mobile}
            alt="illustration with women"
            className="illustration__women_mobile"
          />
        </div>
        <Accordion questionAnswers={questionAnswers} />
      </article>
    </main>
  );
};

export default App;
