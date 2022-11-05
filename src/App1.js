import React, { Component } from 'react';
class App1 extends Component {
  constructor(props) {
    super(props);
    const mob1 = {
      model: 'Google Pixel 2 XL',
      price: '62,000',
      ram: '4 GB',
      camera: '12.2MP',
      os: 'Android Pie',
      processor: 'Snapdragon 835 octa-core',
    };
    const mob2 = {
      model: 'Apple iPhone x',
      price: '98, 000',
      ram: '3 GB',
      camera: '12 MP',
      os: 'iOS 11.1.1',
      processor: 'A11 Bionic hexa-core',
    };
    this.mobArr = [mob1, mob2];
  }
  render = () => {
    return (
      <div className="row" style={{ marginTop: 30 }}>
        <h3 className="text-center text-primary">Mobile Shop Data</h3>
      </div>
    );
  };
}

export default App1;
