import React, { useState } from "react";
import { ReactGrid } from "@silevis/reactgrid";
const getPeople = () => {
    return [
        { name: "Thomas", surname: "Goldman", lastName: "Gohar" },
        { name: "Susie", surname: "Quattro", lastName: "Gohar" },
    ];
};
const getColumns = () => {
    return [
        { columnId: "name", width: 300, resizable: true },
        { columnId: "surname", width: 150, resizable: true },
        { columnId: "lastName", width: 150, resizable: true },
    ];
};

const headerRow = {
    rowId: "header",
    cells: [
        { type: "header", text: "Name" },
        { type: "header", text: "Surname" },
        { type: "header", text: "Last Name" },
    ],
};

const getRows = (people) => [
    headerRow,
    ...people.map((person, idx) => ({
        rowId: idx,
        cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname },
            { type: "text", text: person.lastName },
        ],
    })),
];

const applyChangesToPeople = (changes, prevPeople) => {
    changes.forEach((change) => {
        const personIndex = change.rowId;
        const fieldName = change.columnId;
        prevPeople[personIndex][fieldName] = change.newCell.text;
    });
    return [...prevPeople];
};

const GridTable = () => {
    const [people, setPeople] = useState(getPeople());
    const [columns, setColumns] = useState(getColumns());
    const rows = getRows(people);

    const handleColumnResize = (ci, width) => {
        setColumns((prevColumns) => {
            const columnIndex = prevColumns.findIndex(
                (el) => el.columnId === ci
            );
            const resizedColumn = prevColumns[columnIndex];
            const updatedColumn = { ...resizedColumn, width };
            prevColumns[columnIndex] = updatedColumn;
            return [...prevColumns];
        });
    };

    const handleChanges = (changes) => {
        setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
    };

    const simpleHandleContextMenu = (
        selectedRowIds,
        selectedColIds,
        selectionMode,
        menuOptions
    ) => {
        return menuOptions;
    };

    return (
        <>
            <div className="relative w-1/2 m-auto p-10">
                <ReactGrid
                    rows={rows}
                    columns={columns}
                    onColumnResized={handleColumnResize}
                    onCellsChanged={handleChanges}
                    enableRangeSelection
                    enableColumnSelection
                    onContextMenu={simpleHandleContextMenu}
                />
            </div>
        </>
    );
};
export default GridTable;
