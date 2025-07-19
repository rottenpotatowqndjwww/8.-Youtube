import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


import home from '../../assets/home.png';
import game from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertaintment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';


import dream from '../../assets/dream.png';
import crunchyroll from '../../assets/crunchyroll.png';
import brocode from '../../assets/brocode.png';
import Formula_1 from '../../assets/Formula_1.png';
import Donut from '../../assets/Donut.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      
      
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
          <img src={game} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
          <img src={entertaintment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="Technology" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
          <img src={news} alt="News" />
          <p>News</p>
        </div>
        <hr />
      </div>

      
      <div className="subscribed-list">
        <h3>Subscriptions</h3>

        <a href="https://www.youtube.com/@Dream" className="side-link">
          <img src={dream} alt="Dream" />
          <p>Dream</p>
        </a>

        <a href="https://www.youtube.com/@Crunchyroll" className="side-link">
          <img src={crunchyroll} alt="Crunchyroll" />
          <p>Crunchyroll</p>
        </a>

        <a href="https://www.youtube.com/@BroCodez" className="side-link">
          <img src={brocode} alt="BroCode" />
          <p>BroCode</p>
        </a>

        <a href="https://www.youtube.com/@Formula1" className="side-link">
          <img src={Formula_1} alt="Formula 1" />
          <p>Formula 1</p>
        </a>

        <a href="https://www.youtube.com/@DonutMedia" className="side-link">
          <img src={Donut} alt="Donut" />
          <p>Donut</p>
        </a>
      </div>

    </div>
  );
};

export default Sidebar;
