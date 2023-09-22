const Player = () => {
  return (
    <>
      <div class="container-fluid fixed-bottom bg-container pt-1">
        <div class="row">
          <div class="col-lg-10 offset-lg-2">
            <div class="row">
              <div class="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <div class="row">
                  <a href="#">
                    <img src="assets/img/playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/img/playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/img/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/img/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/img/playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center playBar py-3">
              <div class="col-8 col-md-6">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Player;
