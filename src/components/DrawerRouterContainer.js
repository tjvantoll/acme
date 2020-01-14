import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button } from '@progress/kendo-react-buttons';
import { Avatar, Drawer, DrawerContent } from "@progress/kendo-react-layout";

const user = {
  initials: "TV",
  name: "TJ VanToll",
  position: "Developer Advocate",
  img: "https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg"
};

const items = [
  { text: "Home", icon: "k-i-globe-outline", selected: true, route: "/" },
  { text: "Sign Up", icon: 'k-i-plus-outline', selected: false, route: '/forms' },
  { text: "Our Team", icon: 'k-i-user', selected: false, route: '/team' },
];

class DrawerRouterContainer extends React.Component {
  state = {
    expanded: false,
    selectedId: items.findIndex(x => x.selected === true)
  }

  handleClick = () => {
    this.setState((e) => ({ expanded: !e.expanded }));
  }

  closeDrawer = () => {
    this.setState({ expanded: false });
  }

  onSelect = (e) => {
    this.setState({ selectedId: e.itemIndex });
    this.setState({ expanded: false });
    this.props.history.push(e.itemTarget.props.route);
  }

  setSelectedItem = (pathName) => {
    let currentPath = items.find(item => item.route === pathName);
    if (currentPath.text) {
      return currentPath.text;
    }
  }

  render() {
    let selected = this.setSelectedItem(this.props.location.pathname);
    return (
      <div>
        <Drawer
          expanded={this.state.expanded}
          items={items.map(
            (item) => ({ ...item, selected: item.text === selected }))}
          onSelect={this.onSelect}
          animation={{ duration: 400 }}
          position="start"
          onOverlayClick={this.closeDrawer}
        >
          <DrawerContent>
            <div className="header">
              <h1>
                <Button icon="menu" look="flat" onClick={this.handleClick} />
                <span className="title">ACME Industries</span>
                {/*<Avatar shape="rounded" type="image">
                  <img alt={user.name} src={user.img} />
                </Avatar>*/}
                <Avatar shape="rounded" type="initials">
                  <span>{user.initials}</span>
                </Avatar>
              </h1>
            </div>
            {this.props.children}
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
};

export default withRouter(DrawerRouterContainer);
