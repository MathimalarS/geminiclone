import { assets } from "../../assets/assets";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.usericon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compassicon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulbicon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activites for our work retreat</p>
            <img src={assets.messageicon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.codeicon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="searchbox">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.galleryicon} alt="" />
              <img src={assets.micicon} alt="" />
              <img src={assets.sendicon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurable info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
