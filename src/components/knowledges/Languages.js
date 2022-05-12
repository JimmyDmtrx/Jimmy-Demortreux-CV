import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "Html/Css", xp: 1.5 },
      { id: 2, value: "Node.js", xp: 1.2},
      
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "Bootstrap", xp: 1 },
      { id: 3, value: "TypeScript", xp: 0.5 },
      { id: 4, value: "Express", xp: 1.2 },
      { id: 5, value: "React native", xp: 0.7 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          data={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          data={frameworks}
          className="frameworksDisplay"
          title="frameworks "
        />
      </div>
    );
  }
}

export default Languages;
