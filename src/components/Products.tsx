import React from "react";
import { getter } from "@progress/kendo-react-common";
import { Grid, GridColumn, GridSelectionChangeEvent, getSelectedState } from "@progress/kendo-react-grid";

import { getRandomProducts } from "../data/products";

const DATA_ITEM_KEY = 'id';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

export default function Products() {
  const [products, setProducts] = React.useState<Array<any>>([]);
  const [selectedState, setSelectedState] = React.useState<any>({});

  React.useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  }

  return (
    <>
      <Grid
        data={products.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        selectable={{
          enabled: true,
          mode: 'multiple',
          cell: true,
          drag: true,
        }}
        selectedField="selected"
        dataItemKey="id"
        onSelectionChange={onSelectionChange}
        style={{ opacity: products.length > 0 ? 1 : 0 }}>
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
        <GridColumn field="inStock" title="In Stock" />
      </Grid>
    </>
  );
}
