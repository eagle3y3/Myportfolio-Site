import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img src="https://lh3.googleusercontent.com/E0aVsvBd4zxlPmmU3x313p0Y82TjQ1GTGZ5ZrADC6hHwtc8EDcpgPy8fI9KTXcil1Ugw7tCTqNzFO076z2jobtOk2cPYo3jQ7dfgRnr7RZEa56owDi_3B7V9sZQfPuxyJfHLxckna_slYJY1TUTh50_D2_zEPl9cU1yyMd06hsbB4A-j0vAPkBdDF8d-VMbSRBBlmn3Gk3IDiMPV08ejI-kjWalbPxNNlXQGg-4Re8-MrIwIK1AivqAOdQ8puftNWCxA4YpUNjJbmyPH310E6isZGoqO0zpjp4Opa29-LmYQtYS8gQ_UWpjjk-J9QWMyWPpShKId1fRmFfYCnpz41RDYFhHXgPG6yp6BzFlIAoc7JTQHFkNmmPlMAFA3F1J2Ztg4xGgaE0j5NOlWs7ZlMOXEIHgjtg1AVV8MtsGiTGpeeS07W-qLc6E0y9DE5kqgL-xVVgEGAvdVV111ncQ2b8onhLtK0n6BiuAF0l4YQJo0YpyHXXYLl4XcIAuLubw0h7JgOtzhG58HKNhlFe45IdURlKX8y6684kIn2kbqfIG7xh2IzdfUsDpw-zREP66Hc5mHF1Yr6bCSxgB-pAKTO3Eymn8usNxkk6eH5XGxDqWHVvk724VFYy6lDVhi7QwCSVfvwJFYENdaKBj6Bnp527fZtHS1PKs=s881-no"
              alt="avatar"
              style={{paddingTop: 20, height: '250px', borderRadius: '50%'}} />
            </div>

            <h2 style={{paddingTop: '2em'}}>Lester Hairston</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #2C5364', width: '90%'}} />
            <p>I have started off working in the Lifeguard industry for a couple years
            and wanted a career change. I always had a love for building things and
            solving problems. I'm looking for a role where I can work on a project and gain experience
            that further improve my skillset and provide value to the company's objective.</p>
            <hr style={{borderTop: '3px solid #2C5364', width: '90%'}} />

            <h5>Location</h5>
            <p>Houston, Texas</p>

            <h5>Phone</h5>
            <p>(832)-589-6537</p>

            <h5>Email</h5>
            <p>hairston.lester@gmail.com</p>

            <h5>Web</h5>
            <p>LesterHairston.me</p>

            <hr style={{borderTop: '3px solid #2C5364', width: '90%'}} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>
              <ul style={{listStyleType: 'none'}}>
                <li><b>JavaScript</b> - React.js, Redux, React-mdl, ES6, jQuery, NodeJS</li>
                <li><b>Python</b> - Python 3.7, Django, BeautifulSoup, Scipy, Pandas, Numpy, Selenium </li>
                <li><b>HTML/CSS</b> - Sass, Bootstrap, </li>
                <li><b>Other</b> - Adobe Premiere Pro CC, Photoshop</li>
              </ul>

            <hr style={{borderTop: '2px solid #2C5364', width: '90%'}} />

            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="FreeCodeCamp"
              schoolDescription="Responsive Web Design (300 hour coursework)"
              />

            <hr style={{borderTop: '2px solid #2C5364', width: '90%'}} />

            <h2>Work Experience</h2>

            <Experience
              startYear={2017}
              endYear="Present"
              workName="Photocision (Ecommerce)"
              workDescription=
                <ul>
                  <li>Customized website for mobile and desktop</li>
                  <li>The traffic of my store was the top 15% of all Shopify stores that were built within the same week as me</li>
                  <li>Sustained a high profit margin of 46%</li>
                  <li>Split A/B tested to optimize for a 6% conversion using Scipy and Pandas (average online retailers ~2.6%)</li>
                  <li>Utilized FB and Instagram ads to help generate traffic</li>
                  <li>Ads were created with Adobe Premiere Pro and Photoshop</li>
                </ul>

              />
              <Experience
                startYear={2013}
                endYear= {2016}
                workName="Lifeguard Manager"
                workDescription=
                  <ul>
                    <li>Responsibility over lifeguards and patrons</li>
                    <li>Responsible for work schedules, attendance, and making sure lifeguards were actively aware of rules and regulations</li>
                    <li>Managed 6 pools with over 20+ different lifeguards</li>
                  </ul>

                />

              <Experience
                startYear={2015}
                endYear={2017}
                workName="Lifeguard Instructor"
                workDescription=
                  <ul>
                    <li>Taught other lifeguards CPR/AED</li>
                    <li>Instructed trainees on safety lifeguard techniques that they would have to use in case of emergencies</li>
                    <li>Audited lifeguards throughout the year to make sure they retained information learned from training</li>
                  </ul>
              />



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
