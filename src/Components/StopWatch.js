import React, { useEffect, useState } from "react";
import './StopWatch.css';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


export default function StopWatch() {
   const [sec, setSec] = useState(0);
   const [status, setStatus] = useState("stop");

   useEffect(() => {
      const unsubscribe$ = new Subject();
      interval(1000)
         .pipe(takeUntil(unsubscribe$))
         .subscribe(() => {
            if (status === "run") {
               setSec(val => val + 1000);
            }
         });
      return () => {
         unsubscribe$.next();
         unsubscribe$.complete();
      };
   }, [status]);

   const start = React.useCallback(() => {
      setStatus("run");
   }, []);

   const stop = React.useCallback(() => {
      setStatus("stop");
      setSec(0);
   }, []);

   const reset = React.useCallback(() => {
      setSec(0);
   }, []);

   const wait = React.useCallback(() => {
      setStatus("wait");
   }, []);

   /*===================================================*/

   return (
      <div>
         <div className="stopWatch__wrapper">
            <div className="display__stopwatch">{new Date(sec).toISOString().slice(11, 19)}</div>
            <div className="btn__block">
               <button className="btn" onClick={start}>Start</button>
               <button className="btn" onClick={stop}>Stop</button>
               <button className="btn" onDoubleClick={wait}>Wait</button>
               <button className="btn" onClick={reset}>Reset</button>
            </div>
         </div>
      </div>
   )
}
