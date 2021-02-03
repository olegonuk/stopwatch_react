import React, { Component } from 'react';
import './StopWatch.css';

export default class StopWatch extends Component {
   constructor(props) {
      super(props)
      this.state = {
         time: `0${0}:0${0}:0${0}`,
         milliseconds: 1000,
         timeInterval: null
      };
   };
   //Очистка интервала
   clearInt() {
      this.setState({
         timeInterval: clearInterval(this.state.timeInterval),
      })
   }
   //Старт секундомера
   start() {
      this.clearInt();
      this.setState({
         timeInterval: setInterval(() => this.updateClock(), 1000)
      });
   };
   //Остановка секундомера
   stop() {
      this.clearInt()
      this.setState({
         time: `0${0}:0${0}:0${0}`,
         milliseconds: 1000,
         timeInterval: null
      });
   }
   //Сброс секундомера
   reset() {
      if (this.state.milliseconds !== 1000) {
         this.stop();
         this.start();
      } else {
         return false;
      }
   }
   //Остановка секундомер "сделано по обычному даблКлик"
   wait() {
      this.clearInt();
   }
   //Отрисовка секундомера на дисплей
   updateClock() {
      let dateTimer = new Date(this.state.milliseconds);

      let seconds = dateTimer.getUTCSeconds();
      let minutes = dateTimer.getUTCMinutes();
      let hours = dateTimer.getUTCHours();

      function addZero(t) {
         return t = t < 10 ? '0' + t : t
      };
      this.setState({
         time: `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`,
         milliseconds: this.state.milliseconds + 1000,
      })
   };

   render() {

      return (
         <div>
            <div className="stopWatch__wrapper">
               <div className="display__stopwatch">{this.state.time}</div>
               <div className="btn__block">
                  <button className="btn" onClick={() => this.start()}>Start</button>
                  <button className="btn" onClick={() => this.stop()}>Stop</button>
                  <button className="btn" onDoubleClick={() => this.wait()}>Wait</button>
                  <button className="btn" onClick={() => this.reset()}>Reset</button>
               </div>
            </div>
         </div>
      )
   }
}
