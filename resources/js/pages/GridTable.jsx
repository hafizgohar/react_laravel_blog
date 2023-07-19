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
        { columnId: 1, width: 300, resizable: true },
        { columnId: 2, width: 150, resizable: true },
        { columnId: 3, width: 150, resizable: true },
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
// const Initialhighlights = [{ columnId: 1, rowId: 1, borderColor: "#00ff00" }];

const GridTable = () => {
    const [people, setPeople] = useState(getPeople());
    const [columns, setColumns] = useState(getColumns());
    const [highlights, setHighlight] = useState([]);

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

    const handleInputChange = (event) => {
        const { value } = event.target;
        const newObject = {
            rowId: Number(value),
            columnId: Number(value),
            borderColor: "red",
        };
        setHighlight((prevArray) => [...prevArray, newObject]);
    };
    console.log(highlights);

    return (
        <>
            <div className="relative w-1/2 m-auto p-10">
                <input
                    type="email"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    onChange={handleInputChange}
                />
                <ReactGrid
                    rows={rows}
                    columns={columns}
                    onColumnResized={handleColumnResize}
                    onCellsChanged={handleChanges}
                    enableRangeSelection
                    onContextMenu={simpleHandleContextMenu}
                    highlights={highlights}
                />
            </div>
        </>
    );
};
export default GridTable;
