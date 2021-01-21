import React from "react";
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { Grid, GridColumn } from "@progress/kendo-react-grid";

import { getRandomProducts } from "../data/products";

export default function Products() {
  const [products, setProducts] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    setProducts(getRandomProducts());
  }, []);

  return (
    <>
      <h2>🎉 Dropdown Playground 🎉</h2>
      <MultiColumnComboBox
        data={products}
        columns={[
          { field: 'name', header: 'Name', width: '300px' },
          { field: 'price', header: 'Price', width: '100px' },
          { field: 'inStock', header: 'In Stock', width: '100px' }
        ]}
        textField={"name"} />
      
      <h2>👩‍💼 Grid and Stuff 👨‍💼</h2>
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
