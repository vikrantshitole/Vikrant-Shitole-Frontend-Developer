import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import SearchForm from "../SearchForm/SearchForm";
import ListView from "../ListView/ListView";
import * as service from "../../Service/service";

function Container() {
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
    service
      .fetchCapsule(reqData)
      .then((res) => setList(res.data))
      .catch((Err) => console.error(Err))
  };
  
  useEffect(()=>{
    fetchCapulses()
  },[page])
  return (
    <div>
      <Dashboard />
      <section className="section">
        <div className="container">
          <SearchForm
            type={type}
            setType={setType}
            status={status}
            setStatus={setStatus}
            originalLaunch={originalLaunch}
            setOriginalLaunch={setOriginalLaunch}
            fetchCapulses={fetchCapulses}
          />
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
export default React.memo(Container)