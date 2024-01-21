import '../../static/css/global/header-01.css';
import '../../static/css/global/lineicons.css';
import '../../static/css/global/starter.css';
import header from '../../static/image/header-1.svg';
import image from '../../static/image/header-shape.svg';

function Header(){
        return(
    <section class="header-area header-one">
      <div class="header-content-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12">
              <div class="header-wrapper">
                <div class="header-content">
                  <h1 class="header-title">
                    Muskan 
                  </h1>
                  <p class="text-lg">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed!
                  </p>
                  <div class="header-btn rounded-buttons">
                    <a
                      class="btn primary-btn-outline btn-lg"
                      href="javascript:void(0)"
                    >
                      DOWNLOAD NOW
                    </a>
                  </div>
                </div>
                {/* <!-- header content --> */}
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="header-image d-none d-lg-block">
                <div class="image">
                  <img
                    src={header}
                    alt="Header"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
        <div class="header-shape">
          <img src={image} alt="shape" />
        </div>
        {/* <!-- header-shape --> */}
      </div>
      {/* <!-- header content area --> */}
    </section>
        )
}
export default Header