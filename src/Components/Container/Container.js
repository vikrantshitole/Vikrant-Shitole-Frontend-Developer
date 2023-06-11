import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import SearchForm from "../SearchForm/SearchForm";
import ListView from "../ListView/ListView";
import * as service from "../../Service/service";

function Container() {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  
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
          />
         </div>
      </section>
    </div>
  );
}
export default React.memo(Container)