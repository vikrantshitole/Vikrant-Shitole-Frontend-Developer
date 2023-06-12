import React from "react";

export default function Badge({ mission }) {
  return (
    <div>
      <span className="badge bg-soft-secondary fs-14 mt-1">{mission.name}</span>
    </div>
  );
}
