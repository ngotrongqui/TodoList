import React, { memo } from "react";

const Header = memo((props) => {
  const { setStatusFilter, activeButton, clearCompleted } = props;
  return (
    <header className="header">
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={`${activeButton === "ALL" ? "selected" : ""}`}
            onClick={() => setStatusFilter("ALL")}
          >
            All
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/active"
            className={`${activeButton === "ACTIVE" ? "selected" : ""}`}
            onClick={() => setStatusFilter("ACTIVE")}
          >
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/completed"
            className={`${activeButton === "COMPLETED" ? "selected" : ""}`}
            onClick={() => setStatusFilter("COMPLETED")}
          >
            Completed
          </a>
        </li>
      </ul>
      {
        <button className="clearCompleted" onClick={clearCompleted}>
          Delete All
        </button>
      }
    </header>
  );
});

export default Header;