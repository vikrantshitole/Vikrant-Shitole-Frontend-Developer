import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import SearchForm from "../SearchForm/SearchForm";
import ListView from "../ListView/ListView";
import * as service from "../../Service/service";
import { setIsCapsule } from "../../store/actions";
import { connect } from "react-redux";

function Container(props) {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);
  const [pageSize, setPageSize] = useState(10);
  const [list,setList] = useState([])
  const fetchCapulses = () => {
    // console.log(this.props);
    let reqData = "?";
    if (status) {
      reqData = reqData + `status=${status}&`;
    }
    if (originalLaunch) {
      reqData = reqData + `original_launch=${new Date(originalLaunch).toISOString()}&`;
    }
    if (type) {
      reqData = reqData + `type=${type}&`;
    }
    reqData =
      reqData +
      `limit=${page * pageSize}&offset=${
        (page - 1) * pageSize
      }`;
      let fn='fetchCapsule'
      if (props.is_capsulse) {
        fn='fetchRockets'
      }
    service[fn](reqData)
      .then((res) => {
        setList(res.data)
      })
      .catch((Err) => console.error(Err))
  };
  
  useEffect(()=>{
    fetchCapulses()
  },[page,props.is_capsulse])
  return (
    <div>
      <Dashboard />
      <section className="section">
        <div className="container">
          {!props.is_capsulse?(
            <SearchForm
              type={type}
              setType={setType}
              status={status}
              setStatus={setStatus}
              originalLaunch={originalLaunch}
              setOriginalLaunch={setOriginalLaunch}
              fetchCapulses={fetchCapulses}
            />

          ):''}
          <ListView
          list={list}
          page={page}
          totalPage={totalPage}
            fetchCapulses={fetchCapulses}
            changePage={setPage}
          />
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state =>({
  is_capsulse: state.spacex.is_capsulse
})
export default connect(mapStateToProps)(React.memo(Container))