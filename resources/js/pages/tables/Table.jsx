import React, { useState } from "react";
import { columns as dataColumns } from "./columns";
import { rows as dataRows, headerRow } from "./rows";
import { ReactGrid } from "@silevis/reactgrid";

/* 
  searches for a chevron cell in given row
*/
const findChevronCell = (row) => {
    return row.cells.find((cell) => cell.type === "chevron");
};

/* 
  searches for a parent of given row
*/
const findParentRow = (rows, row) =>
    rows.find((r) => {
        const foundChevronCell = findChevronCell(row);
        return foundChevronCell ? r.rowId === foundChevronCell.parentId : false;
    });

/* 
  check if the row has children
*/
const hasChildren = (rows, row) =>
    rows.some((r) => {
        const foundChevronCell = findChevronCell(r);
        return foundChevronCell
            ? foundChevronCell.parentId === row.rowId
            : false;
    });

/* 
  Checks is row expanded
*/
const isRowFullyExpanded = (rows, row) => {
    const parentRow = findParentRow(rows, row);
    if (parentRow) {
        const foundChevronCell = findChevronCell(parentRow);
        if (foundChevronCell && !foundChevronCell.isExpanded) return false;
        return isRowFullyExpanded(rows, parentRow);
    }
    return true;
};

const getExpandedRows = (rows) =>
    rows.filter((row) => {
        const areAllParentsExpanded = isRowFullyExpanded(rows, row);
        return areAllParentsExpanded !== undefined
            ? areAllParentsExpanded
            : true;
    });

const getDirectChildRows = (rows, parentRow) =>
    rows.filter(
        (row) =>
            !!row.cells.find(
                (cell) =>
                    cell.type === "chevron" && cell.parentId === parentRow.rowId
            )
    );

const assignIndentAndHasChildren = (rows, parentRow, indent = 0) => {
    ++indent;
    getDirectChildRows(rows, parentRow).forEach((row) => {
        const foundChevronCell = findChevronCell(row);
        const hasRowChildrens = hasChildren(rows, row);
        if (foundChevronCell) {
            foundChevronCell.indent = indent;
            foundChevronCell.hasChildren = hasRowChildrens;
        }
        if (hasRowChildrens) assignIndentAndHasChildren(rows, row, indent);
    });
};

const buildTree = (rows) =>
    rows.map((row) => {
        const foundChevronCell = findChevronCell(row);
        if (foundChevronCell && !foundChevronCell.parentId) {
            const hasRowChildrens = hasChildren(rows, row);
            foundChevronCell.hasChildren = hasRowChildrens;
            if (hasRowChildrens) assignIndentAndHasChildren(rows, row);
        }
        return row;
    });

const Table = () => {
    const [columns] = useState(() => dataColumns(true, false));
    const [rows, setRows] = useState(() => buildTree(dataRows(true)));
    const [rowsToRender, setRowsToRender] = useState([
        headerRow,
        ...getExpandedRows(rows),
    ]);

    const handleChanges = (changes) => {
        console.log(changes);
        const newRows = [...rows];
        changes.forEach((change) => {
            const changeRowIdx = rows.findIndex(
                (el) => el.rowId === change.rowId
            );
            const changeColumnIdx = columns.findIndex(
                (el) => el.columnId === change.columnId
            );
            console.log(newRows[changeRowIdx].cells[changeColumnIdx]);
            newRows[changeRowIdx].cells[changeColumnIdx] = change.newCell;
        });
        setRows(buildTree(newRows));
        setRowsToRender([headerRow, ...getExpandedRows(newRows)]);
    };

    const handleFocusLocation = (location) => {
        // console.log(location);
        // console.log(rows);
        // const rowCell = rows.find(
        //     (cellData) => cellData.rowId === location.rowId
        // );
        // // const colCell = rowCell.cells.find(
        // //     (cellData) => cellData.columnId === location.columnId
        // // );
        // console.log(rowCell.cells[1].text);
    };

    return (
        <>
            <div className="w-1/2 m-auto p-5">
                <ReactGrid
                    rows={rowsToRender}
                    columns={columns}
                    onCellsChanged={handleChanges}
                    enableFillHandle
                    enableRangeSelection
                    onFocusLocationChanged={handleFocusLocation}
                />
            </div>
        </>
    );
};
export default Table;
