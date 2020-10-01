import React from "react";
import { Loader } from "@progress/kendo-react-indicators";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import Render from "../components/Render";

import { getRandomProducts } from "../data/products";

export default function Products() {
  const [products, setProducts] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    setTimeout(() => {
      setProducts(getRandomProducts());
    }, 5000);
  }, []);

  return (
    <>
      <Render if={products.length === 0}>
        <Loader />
      </Render>
      <Grid
        data={products}
        style={{ opacity: products.length > 0 ? 1 : 0}}>
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" format="{0:c2}" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
        <GridColumn field="inStock" title="In Stock" />
      </Grid>
    </>
  );
}
