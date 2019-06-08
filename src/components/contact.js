import React, { Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Lester Hairston</h2>
            <h4>Houston, TX</h4>
            <img
              src="https://lh3.googleusercontent.com/E0aVsvBd4zxlPmmU3x313p0Y82TjQ1GTGZ5ZrADC6hHwtc8EDcpgPy8fI9KTXcil1Ugw7tCTqNzFO076z2jobtOk2cPYo3jQ7dfgRnr7RZEa56owDi_3B7V9sZQfPuxyJfHLxckna_slYJY1TUTh50_D2_zEPl9cU1yyMd06hsbB4A-j0vAPkBdDF8d-VMbSRBBlmn3Gk3IDiMPV08ejI-kjWalbPxNNlXQGg-4Re8-MrIwIK1AivqAOdQ8puftNWCxA4YpUNjJbmyPH310E6isZGoqO0zpjp4Opa29-LmYQtYS8gQ_UWpjjk-J9QWMyWPpShKId1fRmFfYCnpz41RDYFhHXgPG6yp6BzFlIAoc7JTQHFkNmmPlMAFA3F1J2Ztg4xGgaE0j5NOlWs7ZlMOXEIHgjtg1AVV8MtsGiTGpeeS07W-qLc6E0y9DE5kqgL-xVVgEGAvdVV111ncQ2b8onhLtK0n6BiuAF0l4YQJo0YpyHXXYLl4XcIAuLubw0h7JgOtzhG58HKNhlFe45IdURlKX8y6684kIn2kbqfIG7xh2IzdfUsDpw-zREP66Hc5mHF1Yr6bCSxgB-pAKTO3Eymn8usNxkk6eH5XGxDqWHVvk724VFYy6lDVhi7QwCSVfvwJFYENdaKBj6Bnp527fZtHS1PKs=s881-no"
              alt="avatar"
              style={{height: 250, borderRadius: '10%'}}
             />
             <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>I am available for hire and open to any ideas of cooperation.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Arimo', fontWeight: 'bold'}}>
                    <i className="fa fa-phone" aria-hidden="true"/>
                    (832)-589-6537
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Arimo', fontWeight: 'bold'}}>
                    <i className="fas fa-at" aria-hidden="true"/>
                    hairston.lester@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
};

export default Contact;
