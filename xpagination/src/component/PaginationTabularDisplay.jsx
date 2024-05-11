import React, { useState, useEffect } from "react";
import styles from "../module/PaginationTabularDisplay.module.css";

const PaginationTabularDisplay = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = Math.min(startIndex + 10, data.length);
    setTableData(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const isLastPage = (currentPage * 10) >= data.length;

  return (
    <div className={styles.paginationTabularDisplay}>
      <h2>Employee Data Table</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((employee) => (
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
          disabled={isLastPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTabularDisplay;
