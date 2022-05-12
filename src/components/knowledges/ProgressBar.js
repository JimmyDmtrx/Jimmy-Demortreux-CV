import React from "react";

const ProgressBar = (props) => {
  //   console.log(props);
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>expérience</span>
        <span>6 mois</span>
        <span>1 an</span>
      </div>
      <div>
        {props.data.map((item, index) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={index} className="languageList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
