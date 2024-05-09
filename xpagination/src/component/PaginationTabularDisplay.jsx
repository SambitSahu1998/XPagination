import React, { useState } from "react";
import styles from "../module/PaginationTabularDisplay.module.css";

const PaginationTabularDisplay = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = Math.min(startIndex + 10, data.length);

  return (
    <div className={styles.paginationTabularDisplay}>
      <h2>Employee Data Table</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody className={styles.header}>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
            </tr>
          </tbody>
          <tbody>
            {data.slice(startIndex, endIndex).map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={onPreviousClick}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.currentPage}>{currentPage}</span>
        <button
          className={styles.button}
          onClick={onNextClick}
          disabled={endIndex >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTabularDisplay;