import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "Css", xp: 0.8 },
      { id: 2, value: "Node.js", xp: 0.8 },
      { id: 4, value: "React native", xp: 0.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 0.8 },
      { id: 3, value: "TypeScript", xp: 0.8 },
      { id: 4, value: "Express", xp: 0.8 },
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
