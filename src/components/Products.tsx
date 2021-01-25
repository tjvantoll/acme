import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { getRandomProducts } from "../data/products";

export default function Products() {
  const [products, setProducts] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  return (
    <>
      <Grid
        data={products}
        style={{ opacity: products.length > 0 ? 1 : 0 }}>
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
        <GridColumn field="inStock" title="In Stock" />
      </Grid>
    </>
  );
}
