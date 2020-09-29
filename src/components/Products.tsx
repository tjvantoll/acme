import React from "react";
import { Loader } from "@progress/kendo-react-indicators";
import { Grid, GridColumn, GridColumnMenuCheckboxFilter, GridColumnMenuCheckboxFilterProps } from "@progress/kendo-react-grid";
import Render from "../components/Render";

import { getRandomProducts } from "../data/products";

export default function Products() {
  const [products, setProducts] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  return (
    <>
      <Grid
        data={products}>
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" format="{0:c2}" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
        <GridColumn field="inStock" title="In Stock" />
      </Grid>
    </>
  );
}
