import React from "react";
import {
  Filter,
  Operators,
  TextFilter,
  NumericFilter,
  DateFilter,
  BooleanFilter,
} from "@progress/kendo-react-data-tools";
import { filterBy } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import Chance from "chance";

const chance = new Chance();
const acmeProducts = [];
for (var i = 0; i < 50; i++) {
  acmeProducts.push({
    name: chance.capitalize(`${chance.first()} ${chance.animal()}`),
    price: chance.integer({ min: 10, max: 10000 }),
    lastOrder: chance.date({ year: 2019 }),
  })
}

export default function Products() {
  const [filter, setFilter] = React.useState({
    logic: 'and',
    filters: [
      // { field: 'UnitPrice', operator: 'gt', value: 20 }
    ]
  })

  const onFilterChange = (event) => {
    setFilter(event.filter);
  }

  return (
    <React.Fragment>
      <Filter
        value={filter}
        onChange={onFilterChange}
        fields={[
          { name: "name", label: 'Name', filter: TextFilter, operators: Operators.text },
          { name: "price", label: 'Price', filter: NumericFilter, operators: Operators.numeric },
          { name: "lastOrder", label: "Last Order", filter: DateFilter, operators: Operators.date }
        ]}
      />
      <Grid
        data={filterBy(acmeProducts, filter)}
      >
        <GridColumn field="name" title="Name" width="300px" />
        <GridColumn field="price" title="Price" format="{0:c2}" />
        <GridColumn field="lastOrder" title="Last Order" format="{0:d}" />
      </Grid>
    </React.Fragment>
  );
}