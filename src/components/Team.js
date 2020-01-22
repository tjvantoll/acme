import React from "react";
import {
  TreeList, orderBy, filterBy, mapTree, extendDataItem,
  TreeListTextFilter, TreeListNumericFilter, TreeListDateFilter, TreeListBooleanFilter
} from "@progress/kendo-react-treelist";
import employees from "../data/employees";

const subItemsField = 'employees';
const expandField = 'expanded';

export default function Team() {
  let tableRef;
  const [data, setData] = React.useState([...employees]);
  const [dataState, setDataState] = React.useState({
    sort: [
      { field: 'name', dir: 'asc' }
    ],
    filter: []
  });
  const [expanded, setExpanded] = React.useState([1, 2, 32]);
  const [columns, setColumns] = React.useState([
    { field: 'name', title: 'Name', width: 200, expandable: true },
    { field: 'position', title: 'Position', width: 150 },
    { field: 'hireDate', title: 'Hire Date', width: 100, format: '{0:d}' },
    { field: 'phone', title: 'Phone', width: 100 },
    { field: 'extension', title: 'Extension', width: 100 },
    { field: 'fullTime', title: 'Full Time', width: 100 },
    { field: 'timeInPosition', title: 'Tenure', width: 50 }
  ]);

  const onExpandChange = (e) => {
    setExpanded(e.value ?
      expanded.filter(id => id !== e.dataItem.id) :
      [...expanded, e.dataItem.id]
    );
  }

  const handleDataStateChange = (event) => {
    setDataState(event.data);
  }

  const addExpandField = (dataTree) => {
    return mapTree(dataTree, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id)
      })
    );
  }

  const processData = () => {
    let filteredData = filterBy(data, dataState.filter, subItemsField)
    let sortedData = orderBy(filteredData, dataState.sort, subItemsField)
    return addExpandField(sortedData);
  }

  const onColumnResize = (event) => {
    if (tableRef) {
      tableRef.style.width = `${event.totalWidth}px`;
    }
    if (event.end) {
      setColumns(event.columns);
    }
  }

  const onColumnReorder = (event) => {
    setColumns(event.columns);
  }

  return (
    <TreeList
      style={{ widthoverflow: 'auto' }}
      tableProps={{
        ref: (table) => tableRef = table,
        style: { width: "1200px" }
      }}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      sortable={{ mode: 'multiple' }}
      {...dataState}
      data={processData()}
      onDataStateChange={handleDataStateChange}
      columns={columns}
    />
  );
}
