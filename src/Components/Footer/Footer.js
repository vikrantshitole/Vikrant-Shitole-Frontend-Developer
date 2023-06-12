import React, { Component } from "react";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">SpaceX</h5>
              <p className="small text-white">
                The Space Exploration Technologies Corporation (SpaceX) is an
                American spacecraft manufacturer, launcher, and satellite
                communications company headquartered in Hawthorne, California.
              </p>
              <p className="small text-white mb-0">
                &copy; Copyrights. All rights reserved.
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-white">
                <li>
                  <a href="https://twitter.com/spacex">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/spacex">Youtube</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/spacex/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/spacex">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-white">
                SPACEX TO LAUNCH VAST’S COMMERCIAL SPACE STATION AND FIRST HUMAN
                SPACEFLIGHT MISSION.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
