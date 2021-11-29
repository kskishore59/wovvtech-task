import {CgProfile} from 'react-icons/cg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
          <div className="sub-container">
            <h1>... </h1>
            <h1>Ba</h1>
            <CgProfile/>
          </div>
          <div className="right-container">
          <div >
          <div className="right-sub-container">
          <div>
          <div className="band-text-container">
            <h1 className="heading">Band</h1>
            <select>
              <option>CRM</option>
            </select>
            </div>
            <div className="find-container">
              <h1 className="heading">Find apps that enhance your Band experience</h1>
              <input type="search" placeholder="Search a published app" />
            </div>
            <div className="work-text">
              <h1 className="heading">Work with</h1>
            </div>
            <div className="cards-container"> 
              <div className="card-item">
                <img src="https://res.cloudinary.com/dqnh9af86/image/upload/v1638206972/Screenshot_2021-11-29_225914_ejjbso.png" alt="logo"/>
                <p>Bunch</p>
              </div>
              <div className="card-item">
                <img src="https://res.cloudinary.com/dqnh9af86/image/upload/v1638206665/Screenshot_2021-11-29_225329_aw5zsa.png" alt="logo"/>
                <p>Setra</p>
              </div>
              <div className="card-item">
                <img src="https://res.cloudinary.com/dqnh9af86/image/upload/v1638206678/Screenshot_2021-11-29_225346_dmqcjt.png" alt="logo"/>
                <p>Gon App</p>
              </div>
              <div className="card-item">
                <img src="https://res.cloudinary.com/dqnh9af86/image/upload/v1638206687/Screenshot_2021-11-29_225359_sygqx3.png" alt="logo"/>
                <p>Wirc CRM</p>
              </div>
            </div>
            </div>
             <img src="https://res.cloudinary.com/dqnh9af86/image/upload/v1638203439/Screenshot_2021-11-29_215950_kohm5h.png" alt="pic" className="side-image" />

            </div>
            <div className="bottom-text-container">
              <div className="social-medial-container">
                <p className="social-media-text">fb</p>
                <p className="social-media-text">ln</p>
                <p className="social-media-text">tw</p>
              </div>
              <div className="text-items-container">
                <p className="text-items-p">Featured</p>
                <p className="text-items-p">CRM</p>
                <p className="text-items-p">Marketing</p>
                <p className="text-items-p">Analytics</p>
              </div>
            </div>
            </div>
           
           
          </div>
        </div>
    </div>
  );
}

export default App;
