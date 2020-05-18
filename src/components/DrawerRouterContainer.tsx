import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

import { Button } from "@progress/kendo-react-buttons";
import { Avatar, Drawer, DrawerContent, DrawerItemProps } from "@progress/kendo-react-layout";
import { DrawerSelectEvent } from "@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent";

const user = {
  initials: "TV",
  name: "TJ VanToll",
  position: "Developer Advocate",
  img: "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg"
};

const items = [
  { text: "Home", icon: "k-i-globe-outline", route: "/", children: null },
  { text: "Sign Up", icon: "k-i-plus-outline", route: "/signup", children: null },
  { text: "Calendar", icon: "k-i-calendar", route: "/calendar", children: null },
  { text: "Products", icon: "k-i-cart", route: "/products", children: null },
  { text: "Our Team", icon: "k-i-user", route: "/team", children: null },
];

/*
const CustomDrawerItem = (props: DrawerItemProps) => {
  return <div>{props.text}</div>
}
*/

const DrawerRouterContainer = (props: React.PropsWithChildren<any>) => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const onSelect = (e: DrawerSelectEvent) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);
    history.push(e.itemTarget.props.route);
    // this.props.history.push(e.itemTarget.props.route);
  }
  const closeDrawer = () => {
    setExpanded(false);
  }
  const toggleDrawer = () => {
    setExpanded(currentExpanded => {
      return !currentExpanded;
    });
  }

  return (
    <div>
      <Drawer
        expanded={expanded}
        items={items.map(
          (item) => ({ ...item, selected: items[selectedId].text === item.text }))}
        onSelect={onSelect}
        animation={{ duration: 400 }}
        position="start"
        onOverlayClick={closeDrawer}
      >
        <DrawerContent>
          <div className="header">
            <h1>
              <Button icon="menu" look="flat" onClick={toggleDrawer} />
              <span className="title">ACME Industries</span>
              <Avatar shape="rounded" type="image">
                <img alt={user.name} src={user.img} />
              </Avatar>
            </h1>
          </div>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default withRouter(DrawerRouterContainer);
