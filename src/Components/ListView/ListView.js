import React, { Component } from "react";
import * as service from "../../Service/service";
import Capsule from "./CapsuleRecord";
import { Fragment } from "react";

export class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      page: 1,
      pageSize: 10,
      totalPages:2
    };
  }
  changePage=(page)=>{
    this.setState({page},()=>{
        this.fetchCapulses()
    })
  }
  render() {
    // console.log(this.state.list);

    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-12">
            <div className="align-items-center row">
              <div className="col-lg-8">
                <div className="mb-3 mb-lg-0">
                  <h6 className="fs-16 mb-0">Showing 1 – 8 of 11 results</h6>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="candidate-list-widgets">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="selection-widget">
                        <select
                          className="form-select"
                          data-trigger="true"
                          name="choices-single-filter-orderby"
                          id="choices-single-filter-orderby"
                          aria-label="Default select example"
                        >
                          <option value="df">Default</option>
                          <option value="ne">Newest</option>
                          <option value="od">Oldest</option>
                          <option value="rd">Random</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="selection-widget mt-2 mt-lg-0">
                        <select
                          className="form-select"
                          data-trigger="true"
                          name="choices-candidate-page"
                          id="choices-candidate-page"
                          aria-label="Default select example"
                        >
                          <option value="df">All</option>
                          <option value="ne">8 per Page</option>
                          <option value="ne">12 per Page</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.props.list.map((l) => (
              <Capsule item={l} key={l.capsule_serial} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="mt-4 pt-2 col-lg-12">
            <nav aria-label="Page navigation example">
              <div className="pagination job-pagination mb-0 justify-content-center">
                {
                    Array.from(Array(this.props.totalPage)).map((t,i)=>{
                        return (
                            <li className={i+1===this.props.page? "page-item active" :  "page-item"} key={i} onClick={()=>{this.props.changePage(i+1)}}>
                            <span className="page-link" href="" >
                              {i+1}
                            </span>
                          </li>
                         
                        )
                    })
                }
               </div>
            </nav>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ListView;
