// src/components/DynamicTable.js
import React from 'react';
import './DynamicTable.css';

const DynamicTable = ({ headers, rows, columns }) => {
    const generateRows = () => {
    const tableRows = [];
    for (let i = 0; i < rows; i++) {
        const rowData = [];
        for (let j = 0; j < columns; j++) {
            rowData.push(<td key={`col-${i}-${j}`}></td>);
        }
        tableRows.push(<tr key={`row-${i}`}>{rowData}</tr>);
    }
    return tableRows;};

    return (
    <table className="DynamicTable">
        <thead>
            <tr>
                {headers.map((header, index) => (
                <th key={`header-${index}`}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
    </table>
);
};

export default DynamicTable;
