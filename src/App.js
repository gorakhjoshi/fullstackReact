import illustration_box from "./images/illustration-box-desktop.svg";
import illustration_woman_desktop from "./images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "./images/illustration-woman-online-mobile.svg";

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
            className="illustration__women_desktop"
          />
          <img
            src={illustration_woman_mobile}
            alt="illustration with women"
            className="illustration__women_mobile"
          />
        </div>
        <div className="faq">
          <h1>FAQ</h1>
          <dl>
            <div>
              <dt>
                <button>My First Question</button>
              </dt>
              <dd>
                <p>My First Answer</p>
              </dd>
            </div>
          </dl>
        </div>
      </article>
    </main>
  );
};

export default App;
