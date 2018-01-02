import React, { Component } from 'react';

class Slogan1 extends Component {
  componentDidMount = () => {
    $('.ui.accordion').accordion();
  }

  render() {
    return (
      <div className="ui inverted vertical stripe teal segment">
        <div className="ui text container">
          <h1 className="ui inverted header">
            FAQ
          </h1>
          <div className="ui inverted accordion">
            <div className="title">
              <i className="dropdown icon"></i>
                What is a dog?
              </div>
            <div className="content">
              <p className="transition hidden">A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </div>
            <div className="title">
              <i className="dropdown icon"></i>
                What kinds of dogs are there?
              </div>
            <div className="content">
              <p className="transition hidden">There are many breeds of dogs.
              Each breed varies in size and temperament.
              Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
            </div>
            <div className="title">
              <i className="dropdown icon"></i>
              How do you acquire a dog?
            </div>
            <div className="content">
              <p className="transition visible">Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
              <p className="transition visible">A pet shop may be the most convenient way to buy a dog.
              Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home.
              Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slogan1;

