import illustration_box from "./images/illustration-box-desktop.svg";
import illustration_woman_desktop from "./images/illustration-woman-online-desktop.svg";
import illustration_woman_mobile from "./images/illustration-woman-online-mobile.svg";

const questionAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

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
