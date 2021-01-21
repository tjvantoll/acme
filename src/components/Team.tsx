import React from "react";
import { TreeListPDFExport } from "@progress/kendo-react-pdf";
import {
  TreeList, TreeListToolbar, orderBy, filterBy, mapTree, extendDataItem,
  // TreeListTextFilter, TreeListNumericFilter, TreeListDateFilter, TreeListBooleanFilter
} from "@progress/kendo-react-treelist";
import employees from "../data/employees";

const subItemsField = 'employees';
const expandField = 'expanded';

export default function Team() {
  let gridPDFExport: TreeListPDFExport;
  const [data] = React.useState([...employees]);
  const [dataState] = React.useState({
    filter: []
  });
  const [expanded, setExpanded] = React.useState([1, 2, 32]);
  const [columns] = React.useState([
    { field: 'name', title: 'Name', width: 200, expandable: true, locked: true },
    { field: 'position', title: 'Position', width: 150 },
    { field: 'hireDate', title: 'Hire Date', width: 100, format: '{0:d}' },
    { field: 'phone', title: 'Phone', width: 100 },
    { field: 'extension', title: 'Extension', width: 100 },
    { field: 'fullTime', title: 'Full Time', width: 100 },
    { field: 'timeInPosition', title: 'Tenure', width: 50 }
  ]);

  const onExpandChange = (e: any) => {
    setExpanded(e.value ?
      expanded.filter(id => id !== e.dataItem.id) :
      [...expanded, e.dataItem.id]
    );
  }

  const processData = () => {
    let filteredData = filterBy(data, dataState.filter, subItemsField)
    let sortedData = orderBy(filteredData, [{ field: "name", dir: "asc" }], subItemsField)
    return mapTree(sortedData, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id)
      })
    );
  }

  const exportPDF = () => {
    gridPDFExport.save();
  }

  const treeList = <TreeList
    expandField={expandField}
    subItemsField={subItemsField}
    onExpandChange={onExpandChange}
    {...dataState}
    data={processData()}
    columns={columns}
    toolbar={
      <TreeListToolbar>
        <button
          title="Export PDF"
          className="k-button k-primary"
          style={{ width: "100px" }}
          onClick={exportPDF}
        >
          Export PDF
      </button>
      </TreeListToolbar>
    }
  />

  return (
    <>
      {treeList}
      <TreeListPDFExport ref={pdfExport => (gridPDFExport = pdfExport as TreeListPDFExport)}>
        {treeList}
      </TreeListPDFExport>
    </>
  );
}
