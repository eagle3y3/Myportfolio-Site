import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
            src="https://lh3.googleusercontent.com/E0aVsvBd4zxlPmmU3x313p0Y82TjQ1GTGZ5ZrADC6hHwtc8EDcpgPy8fI9KTXcil1Ugw7tCTqNzFO076z2jobtOk2cPYo3jQ7dfgRnr7RZEa56owDi_3B7V9sZQfPuxyJfHLxckna_slYJY1TUTh50_D2_zEPl9cU1yyMd06hsbB4A-j0vAPkBdDF8d-VMbSRBBlmn3Gk3IDiMPV08ejI-kjWalbPxNNlXQGg-4Re8-MrIwIK1AivqAOdQ8puftNWCxA4YpUNjJbmyPH310E6isZGoqO0zpjp4Opa29-LmYQtYS8gQ_UWpjjk-J9QWMyWPpShKId1fRmFfYCnpz41RDYFhHXgPG6yp6BzFlIAoc7JTQHFkNmmPlMAFA3F1J2Ztg4xGgaE0j5NOlWs7ZlMOXEIHgjtg1AVV8MtsGiTGpeeS07W-qLc6E0y9DE5kqgL-xVVgEGAvdVV111ncQ2b8onhLtK0n6BiuAF0l4YQJo0YpyHXXYLl4XcIAuLubw0h7JgOtzhG58HKNhlFe45IdURlKX8y6684kIn2kbqfIG7xh2IzdfUsDpw-zREP66Hc5mHF1Yr6bCSxgB-pAKTO3Eymn8usNxkk6eH5XGxDqWHVvk724VFYy6lDVhi7QwCSVfvwJFYENdaKBj6Bnp527fZtHS1PKs=s881-no"
            alt="avatar"
            style={{height: '250px', borderRadius: '5%'}}
           />
            <div className="banner-text">
              <h2>Frontend / Backend Developer</h2>
              <hr/>
              <p>HTMl/CSS | Bootstrap | Sass | JQuery | JavaScript | React | Redux | NodeJS | Python | SQL</p>
              <div className="social-links">
                {/*github*/}
                <a href="https://github.com/eagle3y3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                {/*FreeCodeCamp*/}
                <a href="https://www.freecodecamp.org/lesterhairston" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-free-code-camp" aria-hidden="true"/>
                </a>
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/lester-hairston-5a98a3178/3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
};

export default Landing;
