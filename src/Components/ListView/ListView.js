import React, { Component } from "react";
import * as service from "../../Service/service";
import Capsule from "./CapsuleRecord";
import { Fragment } from "react";
import { connect } from "react-redux";

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
      
            {this.props.list.map((l) => (
              <Capsule item={l} key={l.capsule_serial} />
            ))}
          </div>
        </div>
        {
          this.props.is_capsulse?'':(

        <div className="row">
          <div className="mb-4 pt-2 col-lg-12">
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
          )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state =>({
  is_capsulse: state.spacex.is_capsulse
})
export default connect(mapStateToProps)(ListView);
