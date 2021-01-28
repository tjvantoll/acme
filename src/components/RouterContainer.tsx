import React from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Button } from '@progress/kendo-react-buttons';
import { AppBar, AppBarSection, AppBarSpacer, Avatar, Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { DrawerSelectEvent } from '@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent';
import { BottomNavigation } from '@progress/kendo-react-layout';

const user = {
  initials: 'TV',
  name: 'TJ VanToll',
  position: 'Developer Advocate',
  img: 'https://pbs.twimg.com/profile_images/1029805644310827008/wkAPO_XC_400x400.jpg'
};

const items = [
  { text: 'Home', icon: 'globe-outline', route: '/' },
  { text: 'Support', icon: 'plus-outline', route: '/support' },
  { text: 'Calendar', icon: 'calendar', route: '/calendar' },
  { text: 'Products', icon: 'cart', route: '/products' },
  { text: 'Our Team', icon: 'user', route: '/team' },
  { text: 'Planning', icon: 'folder', route: '/planning' },
];

const RouterContainer = (props: React.PropsWithChildren<any>) => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  var currentRoute = 0;
  items.forEach((item, index) => {
    if (item.route === history.location.pathname) {
      currentRoute = index;
    }
  });
  const [selectedId, setSelectedId] = React.useState(currentRoute);

  const onSelect = (e: DrawerSelectEvent) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);
    history.push(e.itemTarget.props.route);
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
          <AppBar>
            <AppBarSection>
              <Button icon="menu" look="flat" onClick={toggleDrawer} />
            </AppBarSection>
            <AppBarSpacer style={{ width: 4 }} />

            <AppBarSection>
              <h1>ACME Industries</h1>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection>
              <Avatar shape="circle" type="image">
                <img alt="Profile" src={user.img} />
              </Avatar>
            </AppBarSection>
          </AppBar>

          {props.children}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default withRouter(RouterContainer);
