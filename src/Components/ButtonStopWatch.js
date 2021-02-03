import React, { Component } from 'react';

export default class ButtonStopWatch extends Component {
   constructor(props) {
      super(props)
      this.state = this.props.setting;
      console.log(this.state)
   };

   render() {
      return (
         <div>
            <button className="btn" onClick={() => this.start()}>Start</button>
            <button className="btn" onClick={() => this.stop()}>Stop</button>
            <button className="btn" onClick={() => this.wait()}>Wait</button>
            <button className="btn" onClick={() => this.reset()}>Reset</button>
         </div>
      )
   }
}
