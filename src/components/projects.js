import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0}
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      /*React*/
      return(
        <div className="projects-grid">
          {/*Portfolio*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(https://lh3.googleusercontent.com/BLfJYQkclcUCg0-6RrqIgyPUL5nwsPwNbe7PXr2182evsyJGQj1HTIrufmNTH-b7VRrA_JZ20S48kpRPIbCZX3lNfetg78Y1r50HMazTyrJRTMzsGWJPjEW9nocKdkenZp2-395X=w2400) center/cover'}}>
            My Portfolio</CardTitle>
            <CardText>
              My  site using react and several libraries.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/eagle3y3/Myportfolio-Site" target="_blank" rel="noopener noreferrer">Github</Button>
            </CardActions>
          </Card>

          {/*URL Shortener Microservice*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '100px', background:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8iL9qH68Mp0feu9-xPdRTwBZ5s3MfXc6kksNAYY2MUgn_QH_aA)',
            backgroundRepeat: 'no-repeat'}}>
            URL Shortener</CardTitle>
            <CardText>
              Full-stack microservice using the MERN(MongoDB, Express, React, Nodejs) stack.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/eagle3y3/URL-Shortener" target="_blank" rel="noopener noreferrer">Github</Button>
              <Button colored href="https://lester-short-url.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</Button>
            </CardActions>
          </Card>

          {/*Exercise Tracker*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Running/Run-Walk-Run/carousel.jpg) center/cover'}}>
            Exercise Tracker</CardTitle>
            <CardText>
              Full-stack application that logs the users, excercises, and time frames using MongoDB, HTML, CSS, Express
            </CardText>
            <CardActions border>
              <Button colored href="https://lester-exercisetracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</Button>
              <Button colored href="https://github.com/eagle3y3/Excercise-Tracker" target="_blank" rel="noopener noreferrer">Github</Button>
            </CardActions>
          </Card>

        </div>
      )
    }

    /*Python*/
    else if(this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/*Adidas Web Crawler*/}
            <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
              <CardTitle expand style={{color: 'black', height: '200px', background:
              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD3G91rVtJd8wD1CeipbG1xTaz4L507onu8ChjE1SLFzDN_4ryA) center/cover'}}>
              Adidas Web Crawler</CardTitle>
              <CardText>
                Scans entire first page for the newest arrival of shoes.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/eagle3y3/First-Web-Crawler" target="_blank" rel="noopener noreferrer">Github</Button>
              </CardActions>
            </Card>

            {/*Shoebot*/}
            <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
              <CardTitle expand style={{color: 'black', height: '550px', background:
              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImcVpRXQOY8IV7BhQcRfKhnthmjJ4oUU9qaQJhf5BPAFnWgWgeA)', backgroundPosition: '25px bottom',
            backgroundRepeat: 'no-repeat'}}>
              Shoebot (Ongoing)</CardTitle>
              <CardText>
                Shoebot designed to add rare models of shoes and quickly add them to cart and checkout(still developing this feature).
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/eagle3y3/AdidasShoeBot/tree/master" target="_blank" rel="noopener noreferrer">Github</Button>
              </CardActions>
            </Card>

            {/*Tic Tac Toe*/}
            <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
              <CardTitle expand style={{color: 'black', height: '200px', background:
              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wlSmEYiclEUVVwuqbNFXPqyTgPvcQD_l2toTeatKTYgenLv98w) center/cover', backgroundSize: '80% 80%',
            backgroundRepeat: 'no-repeat'}}>
              Tic Tac Toe</CardTitle>
              <CardText>
                Play against computer AI in this classic game.
              </CardText>
              <CardActions border>
                <Button colored href="https://github.com/eagle3y3/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">Github</Button>
              </CardActions>
            </Card>
          </div>
        )
    }

    /*HTML/CSS*/
    else {
      return(
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(http://www.scribendi.com/images/cms/thumbnails/Quotation%20Marks_720x370.jpg) center/cover'}}>
            Quote Generator</CardTitle>
            <CardText>
              Generates random quotes from famous people using an api.
            </CardText>
            <CardActions border>
              <Button colored href="https://codepen.io/eagle3y3/pen/oRRvZY" target="_blank" rel="noopener noreferrer">CodePen</Button>
            </CardActions>
          </Card>

          {/*Project 2*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(https://cdn-images-1.medium.com/max/2600/1*ceQ9mySuP0eKdPOMg5DvPQ.png) center/cover'}}>
            Tribute Page</CardTitle>
            <CardText>
              Static html page dedicated to Elon Musk.
            </CardText>
            <CardActions border>
              <Button colored href="https://codepen.io/eagle3y3/pen/GLwjgq" target="_blank" rel="noopener noreferrer">CodePen</Button>
            </CardActions>
          </Card>

          {/*Project 3*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png) center/cover'}}>
            JS Documentation</CardTitle>
            <CardText>
              Sample JavaScript documentation for desktop and mobile.
            </CardText>
            <CardActions border>
              <Button colored href="https://codepen.io/eagle3y3/pen/dLrGGg" target="_blank" rel="noopener noreferrer">CodePen</Button>
            </CardActions>
          </Card>
          {/*Project 4*/}
          <Card shadow={3} style={{width:'300px', height:'300px', margin:'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '200px', background:
            'url(https://www.qualtrics.com/blog/wp-content/uploads/2015/08/BuildingEffectiveSurveys.png) center/cover'}}>
            Survey Form</CardTitle>
            <CardText>
              HTML code that inquires about the visitors music habits through a survey.
            </CardText>
            <CardActions border>
              <Button colored href="https://codepen.io/eagle3y3/pen/LvXNKm" target="_blank" rel="noopener noreferrer">CodePen</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React/Full-Stack</Tab>
          <Tab>Python</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
