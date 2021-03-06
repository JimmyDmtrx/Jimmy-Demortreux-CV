import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture, lien } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => {
            return <i className={icon} key={icon}></i>;
          })}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />

        <span className="infos" >
          <i onClick={this.handleInfo} className="fas fa-plus-circle"></i>
          <span className="infos">
            <a href={lien}><i className="fas fa-link"></i></a>
          </span>
          </span>
        
        
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="button"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retournez sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
