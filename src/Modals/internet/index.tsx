import "./index.css";
import modalinternet from "./modalinternet.png";
import windowslogo from "./windowslogo.png";
import leftbutton from "./img/icon-button-left.png";
import rigthbutton from  "./img/icon-button-rigth.png";
import crossbutton from  "./img/icon-cross.png";
import refreshbutton from  "./img/icon-refresh.png";
import homebutton from  "./img/icon-home.png";
import searchbutton from "./img/icon-zoom.png";
import starbutton from "./img/icon-star.png";
import clockbutton from "./img/icon-clock.png";
import mailbutton from "./img/icon-mail.png";
import printbutton from "./img/icon-print.png";
import todobutton from "./img/icon-todo.png";
import messengerbutton from "./img/icon-messenger.png";
import downbutton from "./img/icon-down.png";
import gobutton from "./img/icon-go.png";




const ModalInternet: React.FC = () => {
  return (
    <div className="ModalInternet">
      <div className="header">
        <img className="header__img" src={modalinternet} alt="internet" />
        <div className="header__text">Internet Exporer</div>
        <div className="header__buttons">
          <button className="header__button button__minimize"></button>
          <button className="header__button button__maximize"></button>
          <button className="header__button button__close"></button>
        </div>
      </div>
      <div className="content">
        <div className="content__container">
          <section className="content__toolbar">
            <div className="toolbar__options">
              <div className="toolbar__options--container">
              <div className="dropdown">
              <div className="dropdown__label">
                  File
                  </div>
              </div>
              <div className="dropdown">
              <div className="dropdown__label">
                  Edit
                  </div>
              </div>
              <div className="dropdown">
              <div className="dropdown__label">
                  View
                  </div>
              </div>
              <div className="dropdown">
              <div className="dropdown__label">
                  Favorites
                  </div>
              </div>
              <div className="dropdown">
              <div className="dropdown__label">
                  Tools
                  </div>
              </div>
              <div className="dropdown">
              <div className="dropdown__label">
                  Help
                  </div>
              </div>
            </div>
            <img className="windows-logo" src={windowslogo} alt="windowslogo" />
            </div>
          </section>
          <section className="content__functions">
          <div className="functions__button">
          <img className="functions__img" src={leftbutton} alt="leftbutton" />
           <span className="functions__text">Back</span>
           <div className="functions__arrow"></div>
          </div>
          <div className="functions__button">
          <img className="functions__img" src={rigthbutton} alt="rigthbutton" />
           <div className="functions__arrow"></div>
          </div>
          <div className="functions__button">
          <img className="functions__img" src={crossbutton} alt="crossbutton" />

          </div>
          <div className="functions__button">
          <img className="functions__img" src={refreshbutton} alt="refreshbutton" />

          </div>
          <div className="functions__button">
          <img className="functions__img" src={homebutton} alt="homebutton" />

          </div>
          <div className="functions__separate"></div>
          <div className="functions__button">
          <img className="functions__img" src={searchbutton} alt="searchbutton" />
           <span className="functions__text">Search</span>
          </div>
          <div className="functions__button">
          <img className="functions__img" src={starbutton} alt="starbutton" />
           <span className="functions__text">Favorites</span>
          </div>
          <div className="functions__button">
          <img className="functions__img" src={clockbutton} alt="clockbutton" />
          </div>
          <div className="functions__separate"></div>
          <div className="functions__button">
          <img className="functions__img" src={mailbutton} alt="mailbutton" />
           <div className="functions__arrow"></div>
          </div>
          <div className="functions__button">
          <img className="functions__img" src={printbutton} alt="printbutton" />
          </div>
          <div className="functions__button">
          <img className="functions__img" src={todobutton} alt="todobutton" />
          </div>
          <div className="functions__button">
          <img className="functions__img" src={messengerbutton} alt="messengerbutton" />
          </div>
          </section>
          <section className="content__searchbar">
          <div className="searchbar__title">
               Address
          </div>
          <div className="searchbar__content">
          <img className="search__img" src={modalinternet} alt="internet" />

          <div className="searchbar__content--text">
          https://www.CV-matias-fandino.pdf
          </div>
          <img className="search__img--down" src={downbutton} alt="downbutton" />
          </div>
          <div className="searchbar__go">
          <img className="search__img--go" src={gobutton} alt="gobutton" />
          <span className="searchbar__go--text">Go</span>
          
          </div>
          </section>
          <div className="content__cv"></div>
          <div className="content__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalInternet;
