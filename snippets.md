## kr1

``` tsx
<div>
  <TileLayout
    columns={3}
    items={tiles} />
</div>
```

## kr2

``` tsx
const tiles: TileLayoutItem[] = people.map((person, index) => {
  return {
    body: <p>{person.name}</p>,
    header: person.title,
    defaultPosition: {
      col: (index % 3) + 1,
    }
  }
});
```

``` tsx
item: <CustomItem person={person} />
```

## kr3

``` tsx
const CustomItem = ({ person }) => {
  return (
    <div className="custom-tile">
      <h3>{person.name}</h3>
      <p>{person.title}</p>
      <p>{person.location}</p>
      <p>{person.email}</p>
    </div>
  )
}
```

## kr4

``` tsx
<label>Which product do you need help with?</label>
<MultiColumnComboBox
  data={products}
  columns={[
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'price', header: 'Price', width: '100px' },
    { field: 'inStock', header: 'In Stock', width: '100px' }
  ]}
  textField={"name"} />
```

## kr5

``` tsx
<Field
  label="Which product do you need help with?"
  name="product"
  component={CustomComboBox}
  validator={requiredValidator}
/>
```

## kr6

``` tsx
<div className="filter">
  <DropDownTree
    data={treeData}
    value={filterValue}
    onChange={onChange}
    placeholder="Select ..."
    textField={textField}
    dataItemKey={dataItemKey}
    selectField={selectField}
    expandField={expandField}
    onExpandChange={onExpandChange}
    label="Filter by location"
  />
</div>
```

## kr7

``` tsx
const treeData = React.useMemo(
  () => processTreeData(locationTree, { expanded, filterValue }, fields),
  [expanded, filterValue]
);

const onChange = (event) => {
  setFilterValue(event.value);
  const filteredPeople = allPeople.filter(person => {
    if (!event.value) {
      return true;
    }
    return person.location === event.value.text;
  });
  setPeople([...filteredPeople]);
}

const onExpandChange = React.useCallback(
  event => setExpanded(expandedState(event.item, dataItemKey, expanded)),
  [expanded]
);
```

## kr8

``` tsx
<FloatingActionButton
  icon={'share'}
  onClick={() => { }}
  items={shareActions}
/>
```

## kr9

```tsx
<BottomNavigation
  items={items.map(item => ({
    ...item,
    selected: items[selectedId].text === item.text
  }))}
  onSelect={onBottomNavSelect}
/>
```

## kr10

``` tsx
const onBottomNavSelect = (e) => {
  setSelectedId(e.itemIndex);
  history.push(e.itemTarget.route);
}
```

``` tsx
alignOffset={{ y: 75 }}
```

## kr11

``` tsx
<ListBox
  style={{ height: "600px", width: "300px" }}
  data={team1}
  textField="name"
  selectedField="selected"
  onItemClick={e => { handleItemClick(e) }}
/>
```

## kr12

``` tsx
toolbar={() => {
  return (
    <ListBoxToolbar
      tools={['transferTo', 'transferFrom', 'moveUp', 'moveDown']}
      data={team1}
      dataConnected={team2}
      onToolClick={handleToolBarClick}
    />
  );
}}
```

## kr13

``` tsx
<p><Icon name="user" themeColor="primary" />{person.title}</p>
<p><Icon name="globe" themeColor="success" />{person.location}</p>
<p><Icon name="pencil" themeColor="info" />{person.email}</p>
```

``` tsx
form={FormWithCustomEditor}
```

## kr14

``` tsx
const FormWithCustomEditor = (props) => {
  const fields = useSchedulerFieldsContext();

  const titleLengthValidator = React.useCallback(
    (title) => {
      return (!title || title.length < 40)
        ? 'The title should be at least 40 characters.'
        : undefined
    }, []
  );

  const customValidator = React.useCallback(
    (_dataItem, formValueGetter) => {
      let result = {};

      result[fields.title] = [
        titleLengthValidator(formValueGetter(fields.title))
      ].filter(Boolean).reduce((current, acc) => current || acc, '');

      return result;
    },
    [fields, titleLengthValidator]
  )

  return (
    <SchedulerForm
      {...props}
      validator={customValidator} />
  );
}
```

``` tsx
result[fields.end] = [
  endValidator(formValueGetter(fields.end))
].filter(Boolean).reduce((current, acc) => current || acc, '');
```

``` tsx
const endValidator = React.useCallback(
  (end) => {
    return (end.getHours() > 17)
      ? 'Let people leave before 5:00!'
      : undefined
  }, []
);
```