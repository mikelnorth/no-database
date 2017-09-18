import React, { Component } from 'react';
import './App.css';

import Profile from "./components/Profile.js"
import Grid from "./components/Grid.js"


class App extends Component {
  constructor() {
    super();

    this.state = {
      pic: ['http://www.petwave.com/~/media/Images/Center/Care-and-Nutrition/Dog/Puppy/Puppies-in-Basket.ashx', "https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg",
      "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg", "http://www.cutestpaw.com/wp-content/uploads/2011/11/Hamburger.jpg"],
     
    //   discription: ['A basket of puppies is great for every event', 'this little buddle of joys will have you smiling in no time',
    // 'You can pet him, hug him, kiss him!', "THE WRINKLES!!!"],
      currentImage: "",
      flag: false,
      

    }

    this.showImage = this.showImage.bind(this)

  }

  showImage(i) {
    this.setState({
      currentImage: this.state.pic[i],
      // discription: this.state.discription[i],
      flag: true,
      
    })
  }

  render() {
    return (
      <div className="App">

        <div className='side'>
          <profile className='profilePic'>
            <Profile profilePic={this.state.pic} />
            {this.state.flag ? <img src={this.state.currentImage} /> : null}
          </profile>
          <div className="discription">
            {this.state.flag ? this.state.discription : null}
           
          </div>
        </div>


        <Grid showImage={this.showImage} />
      </div>
    );
  }
}

export default App;
