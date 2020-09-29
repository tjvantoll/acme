# KendoReact ACME Sample

- New component: Gantt ❌
  - https://www.telerik.com/kendo-react-ui/components/gantt/

``` TypeScript
const columns = [
  { field: "id", title: 'ID', width: 70 },
  { field: "title", title: 'Title', width: 200 },
  { field: "start", title: 'Start', width: 120, format: "{0:MM/dd/yyyy}"},
  { field: "end", title: 'End', width: 120, format: "{0:MM/dd/yyyy}"}
];
```

``` TypeScript
export const taskData = [
  {
    id: 1,
    title: "Initial Planning",
    start: new Date("2020-10-01T00:00:00.000Z"),
    end: new Date("2020-10-31T00:00:00.000Z"),
    percentComplete: 0.1,
    isExpanded: true,
    children: [
      {
        id: 2,
        title: "Create Planning Documents",
        start: new Date("2020-10-01T00:00:00.000Z"),
        end: new Date("2020-10-04T00:00:00.000Z"),
        percentComplete: 0.25,
      },
      {
        id: 3,
        title: "Review Documents With Management",
        start: new Date("2020-10-04T00:00:00.000Z"),
        end: new Date("2020-10-07T00:00:00.000Z"),
        percentComplete: 0,
      }
    ]
  }
];
```

``` TypeScript
const dependencyData = [
  {
    id: 1,
    fromId: 2,
    toId: 3,
    type: "FF"
  }
];
```

- New component: AppBar ❌
  - https://www.telerik.com/kendo-react-ui/components/layout/appbar/

``` TypeScript
<AppBar>
  <AppBarSection>
    <Button icon="menu" look="flat" onClick={toggleDrawer} />
  </AppBarSection>

  <AppBarSpacer style={{ width: 4 }} />

  <AppBarSection>
    <h1>ACME Industries</h1>
  </AppBarSection>

  <AppBarSpacer style={{ width: 32 }} />

  <AppBarSection>
    <ul>
      <li>
        <BadgeContainer>
          <span>What's New</span>
          <Badge shape="dot" themeColor="tertiary" />
        </BadgeContainer>
      </li>
      <li><span>About</span></li>
      <li><span>Contacts</span></li>
    </ul>
  </AppBarSection>

  <AppBarSpacer />

  <AppBarSection>
    <BadgeContainer>
      <Avatar shape="circle" type="image">
        <img alt="Profile" src={user.img} />
      </Avatar>
      <Badge>3</Badge>
    </BadgeContainer>
  </AppBarSection>
</AppBar>
```

- New component: TextArea ❌
  - https://www.telerik.com/kendo-react-ui/components/inputs/textarea/

```
<FloatingLabel
  className="k-textarea-container"
  editorId="reason"
  label="Why do you want to join ACME?">
  <TextArea
    name="reason"
    id="reason"
    autoSize={true}
  />
</FloatingLabel>
```

- New component: Rating ❌
  - https://www.telerik.com/kendo-react-ui/components/inputs/rating/

``` JavaScript
rating: Math.ceil(Math.random() * 5),
```

```
<Rating defaultValue={person.rating} />
```

- New components: Chip & ChipList ❌
  - https://www.telerik.com/kendo-react-ui/components/buttons/chip/
  - https://www.telerik.com/kendo-react-ui/components/buttons/chiplist/

``` HTML
<div className="filter-container">
  <span>Filter:</span>
  <ChipList
    selection="multiple"
    defaultData={filters}
    defaultValue={activeFilters}
    onChange={filter}
  />
</div>
```

``` JavaScript
const filters = [
  { text: "⭐", value: 1 },
  { text: "⭐⭐", value: 2 },
  { text: "⭐⭐⭐", value: 3 },
  { text: "⭐⭐⭐⭐", value: 4 },
  { text: "⭐⭐⭐⭐⭐", value: 5 },
]
```

``` JavaScript
const [activeFilters, setActiveFilters] = React.useState<Array<number>>([1, 2, 3, 4, 5]);
```

```
const filter = (data: ChipListChangeEvent) => {
  setActiveFilters(data.value);
}
```

```
<Render if={activeFilters.includes(person.rating)} key={person.name}>
```

- New component: Badge ❌
  - https://www.telerik.com/kendo-react-ui/components/indicators/badge/

``` jsx
<BadgeContainer>
  <span>What's New</span>
  <Badge shape="dot" themeColor="tertiary" />
</BadgeContainer>
```

``` jsx
<BadgeContainer>
  <Avatar shape="circle" type="image">
    <img alt="Profile" src={user.img} />
  </Avatar>
  <Badge>3</Badge>
</BadgeContainer>
```

- New component: Loader ❌
  - https://www.telerik.com/kendo-react-ui/components/indicators/loader/

``` TypeScript
setTimeout(() => {
  setProducts(getRandomProducts());
}, 5000);
```

``` jsx
<Render if={products.length === 0}>
  <Loader type="infinite-spinner" size="large" />
</Render>
```

```
style={{ opacity: products.length > 0 ? 1 : 0}}
```

---

- Grid ❌
  - Row pinning
    - https://www.telerik.com/kendo-react-ui/components/grid/rows/row-pin/
  - Customizable pager
    - https://www.telerik.com/kendo-react-ui/components/grid/paging/#custom-pager
  - Column pinning through column menu
    - https://www.telerik.com/kendo-react-ui/components/grid/columns/locked/#locked-columns-with-column-menu

- Editor ❌
  - Font color and background color tools
    - https://www.telerik.com/kendo-react-ui/components/editor/tools/
    - ForeColor, BackColor, CleanFormatting, Print, Pdf, InsertFile and SelectAll
  - Find and replace tool
    - https://www.telerik.com/kendo-react-ui/components/editor/find-replace/
  - Inserting local images
    - https://www.telerik.com/kendo-react-ui/components/editor/images/

``` jsx
<Label>Why do you want to join ACME?</Label>
<Editor
  tools={[
    [Bold, Italic, Underline, Strikethrough],
    [ForeColor, BackColor, CleanFormatting, Print, Pdf, InsertFile, SelectAll, FindAndReplace]
    
  ]}
  contentStyle={{ height: 200 }}
  defaultContent=""></Editor>
```

---

- New and improved documentation ✅

---


