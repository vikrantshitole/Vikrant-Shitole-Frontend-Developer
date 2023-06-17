import DateTimePicker from "react-datetime-picker";
import React from "react";
const Status = [
  {
    id: 1,
    name: "Active",
    value: "active",
  },
  {
    id: 2,
    name: "Retired",
    value: "retired",
  },
  {
    id: 3,
    name: "Unknown",
    value: "unknown",
  },
  {
    id: 4,
    name: "Destroyed",
    value: "destroyed",
  },
];
export default function SearchForm(props) {
  const {
    type,
    setType,
    setOriginalLaunch,
    originalLaunch,
    status,
    setStatus,
  } = props;
  return (
    <div className="justify-content-center row mt-4">
      <div className="col-lg-12">
        <div className="candidate-list-widgets mb-4">
          <form action="#" className="">
            <div className="g-2 row">
              <div className="col-lg-3">
                <div className="filler-job-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type"
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="filler-job-form">
                  <div className="form-group">
                    <select
                      className="form-control"
                      onChange={(e) => setStatus(e.target.value)}
                      data-trigger="true"
                      name="choices-single-categories"
                      id="choices-single-categories"
                      aria-label="Default select example"
                      value={status}
                    >
                      <option value="">Select Status</option>

                      {Status.map((s) => (
                        <option value={s.value} key={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>{" "}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="filler-job-form form-group">
                  <DateTimePicker
                    onChange={(value) => setOriginalLaunch(value)}
                    value={originalLaunch}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div onClick={() => props.fetchCapulses(true)}>
                  <span className="btn btn-primary" href="">
                    Filter
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
