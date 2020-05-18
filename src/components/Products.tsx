import React from "react";
import { Grid, GridColumn, GridColumnMenuCheckboxFilter, GridColumnMenuCheckboxFilterProps } from "@progress/kendo-react-grid";

import { getRandomProducts } from "../data/products";

export default function Products() {
  const products = getRandomProducts();

  /*
  const CustomColumnMenu = (props: GridColumnMenuCheckboxFilterProps) => {
    console.log(JSON.stringify(props));
    return (
      <GridColumnMenuCheckboxFilter {...props} data={products} expanded={true} />
    )
  }
  */

  return (
    <>
      <Grid
        data={products}
      >
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" format="{0:c2}" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
        <GridColumn field="inStock" title="In Stock" />
      </Grid>
    </>
  );
}