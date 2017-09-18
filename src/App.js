import React, { Component } from 'react';
import './App.css';

import Profile from "./components/Profile.js"
import Grid from "./components/Grid.js"
import axios from 'axios'


class App extends Component {
  constructor() {
    super();

    this.state = {
      pic: [],

        discription: ['A basket of puppies is great for every event', 'this little buddle of joys will have you smiling in no time',
      'You can pet him, hug him, kiss him!', "THE WRINKLES!!!"],
      currentImage: "",
      currentDiscription: [],
      flag: false,


    }

    this.showImage = this.showImage.bind(this)

  }

  componentDidMount(){
    
    axios.get('http://localhost:3000/api/dogs').then( (resp) => {
      console.log(resp.data)
      this.setState({
        pic: resp.data
      })
    })
  }

  

  showImage(i) {
    this.setState({
      currentImage: this.state.pic[i],
      currentDiscription: this.state.discription[i],
      flag: true,

    })
  }

  render() {
    return (
      <div className="App">

        <div className='side'>

          <Profile profilePic={this.state.pic} currentImage={this.state.currentImage} flag={this.state.flag} />
          <div className="discription">
            {this.state.flag ? this.state.currentDiscription : null}

          </div>
        </div>


        <Grid showImage={this.showImage} pic={this.state.pic} />
      </div>
    );
  }
}

export default App;
