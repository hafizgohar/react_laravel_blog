import { HotTable, HotColumn } from "@handsontable/react";
import { HyperFormula } from "hyperformula";
import { data } from "./data";

const NewTable = () => {
    const hyperformulaInstance = HyperFormula.buildEmpty({
        licenseKey: "internal-use-in-handsontable",
    });

    return (
        <>
            <div className="w-2/3 mx-auto">
                <HotTable
                    data={data}
                    colWidths={[120, 140, 112, 120, 120]}
                    rowHeaders={true}
                    formulas={{
                        engine: hyperformulaInstance,
                    }}
                    colHeaders={true}
                    dropdownMenu={true}
                    contextMenu={true}
                    nestedRows={true}
                    manualColumnResize={true}
                    height="auto"
                    className="mt-4 relative border-0"
                    licenseKey="non-commercial-and-evaluation" // for non-commercial use only
                >
                    <HotColumn readOnly={true} data="category" />
                    <HotColumn data="artist" />
                    <HotColumn data="title" />
                    <HotColumn data="label" />
                </HotTable>
            </div>
        </>
    );
};
export default NewTable;
