import React from "react";
import "./ActivityLog.css";

const ActivityLog = ({ logs }) => {
  return (
    <div className="activity-log">
      <h3>Activity Log</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;