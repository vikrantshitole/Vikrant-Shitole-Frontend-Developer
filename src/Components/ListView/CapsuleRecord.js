import React from "react";
import Badge from "./badge";
import { connect } from "react-redux";
const status = {
  active: "bg-success",
  destroyed: "bg-danger",
  unknown: "bg-soft-secondary",
  retired: "bg-warning",
  true: "bg-success",
  false: "bg-danger",
};
function CapsuleRecord(props) {
  // console.log(props);

  return (
    <div className="candidate-list">
      <div className="candidate-list-box card mt-4">
        <div className="p-4 card-body">
          <div className="align-items-center row">
            <div className="col-lg-5">
              <div className="candidate-list-content mt-3 mt-lg-0">
                <h5 className="fs-19 mb-0">
                  <span className="primary-link" aria-label="serial-id">
                    {props.is_capsulse
                      ? props.item.rocket_id
                      : props.item.capsule_serial}
                  </span>
                  <span
                    className={
                      status[
                        props.is_capsulse
                          ? props.item.active
                          : props.item.status
                      ] + " badge ms-1"
                    }
                    aria-label="status"
                  >
                    <i className="mdi mdi-star align-middle"></i>
                    {props.is_capsulse
                      ? props.item.rocket_name
                      : props.item.status}
                  </span>
                </h5>
                <p className="text-muted mb-2">
                  {props.is_capsulse ? "" : props.item.capsule_id}
                </p>
                <p className="text-muted mb-2">
                  {props.is_capsulse
                    ? props.item.description
                    : props.item.details}
                </p>
                <ul className="list-inline mb-0 text-muted">
                  <li className="list-inline-item" aria-label="type">
                    {" "}
                    {props.is_capsulse
                      ? props.item.rocket_type
                      : props.item.type}{" "}
                    |{" "}
                  </li>
                  <li className="list-inline-item" aria-label="reuse">
                    <strong>
                      {" "}
                      {props.is_capsulse
                        ? props.item.mass && props.item.mass.kg + " kg"
                        : props.item.reuse_count + " Reuse Count"}{" "}
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mt-2 mt-lg-0 d-flex flex-wrap align-items-start gap-1">
                {props.item &&
                  props.item.missions &&
                  props.item.missions.map((s, i) => (
                    <Badge mission={s} key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  is_capsulse: state.spacex.is_capsulse,
});
export default connect(mapStateToProps)(CapsuleRecord);
