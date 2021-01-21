# Notes

1) As soon as I updated my sample to the new version of KendoReact I got the following error:

```
forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?
```

It’s coming from an `AddButton.tsx` file within KendoReact, but I don’t have much more to go on. You can recreate the problem by running my sample app.

2) I’m having trouble getting the TileLayout to work as expected. I threw together a quick StackBlitz to show you what I mean: https://stackblitz.com/edit/react-4zbmet?file=app/main.jsx.


# KendoReact ACME Sample

- New component: TileLayout ✅
  - https://www.telerik.com/kendo-react-ui/components/layout/tilelayout/

- New component: DropDownTree ❌
  - https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdowntree/

- New component: MultiColumnComboBox ✅
  - https://www.telerik.com/kendo-react-ui/components/dropdowns/multicolumncombobox/

- New component: FloatingActionButton ❌
  - https://www.telerik.com/kendo-react-ui/components/buttons/floatingactionbutton/

- New component: BottomNavigation ❌
  - https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation/

- New component: ListBox ❌
  - https://www.telerik.com/kendo-react-ui/components/listbox/

- New component: Icon & SvgIcon ❌
  - https://www.telerik.com/kendo-react-ui/components/utils/icon/
  - https://www.telerik.com/kendo-react-ui/components/utils/svgicon/

---

- React 17 support ❌

- Grid, TreeList, Editor, and Gantt ❌
  - Built-in Keyboard Navigation

- Grid
  - Improved performance in state management for data cells.

- Gantt ❌
  - Built-in editing
      - https://www.telerik.com/kendo-react-ui/components/gantt/editing/

- Avatar ❌
  - New options and updated design
    - https://www.telerik.com/kendo-react-ui/components/layout/avatar/appearance/

- Scheduler ❌
  - Custom form and form editor
    - https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/overview/
  - Current time marker
