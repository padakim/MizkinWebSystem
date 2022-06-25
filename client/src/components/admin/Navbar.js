import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: '', text: 'Dashboard' },
  { name: 'userlist', text: 'Users' },
  { name: 'account', text: 'Account' },
  { name: 'others', text: 'Others' },
];

const NavBlock = styled.div`
  background-color: #111827;
`;

const LogoBlock = styled.div`
  color: #d1d5db;
  padding: 1rem;
  margin: 2rem 0 0 2.5rem;
`;

const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  height: 100vh;
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  color: #d1d5db;
  margin: 2rem 4rem 2rem 0.5rem;
  padding: 1rem 1rem 1rem 0rem;

  &:hover {
    background-color: #242a38;
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;

const Navbar = ({ onSelect, category }) => {
  const navigate = useNavigate();
  const navigator = (route) => {
    console.log(route);
    navigate(`${route}`);
  };

  useEffect(() => {
    navigate(category);
  }, [category]);

  return (
    <NavBlock>
      <LogoBlock>
        <Typography variant="h5">Mizkin System</Typography>
        <Typography gutterBottom variant="h5">
          Admin Page
        </Typography>
      </LogoBlock>
      <CategoriesBlock>
        {categories.map((item) => (
          <Category
            key={item.name}
            active={category === item.name}
            onClick={() => {
              onSelect(item.name);
            }}
          >
            <Typography variant="h6">{item.text}</Typography>
          </Category>
        ))}
      </CategoriesBlock>
    </NavBlock>
  );
};

export default Navbar;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ProfileContainer from '../../containers/ProfileContainer';

// import TabUnstyled from '@mui/base/TabUnstyled';
// import TabsListUnstyled from '@mui/base/TabUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
// import TabsUnstyled from '@mui/base/TabsUnstyled';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function AdminTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', display: 'flex' }}>
//       <Box
//         sx={{
//           borderRight: 1,
//           borderColor: 'divider',
//           backgroundColor: '#111827',
//         }}
//       >
//         <Tabs
//           orientation="vertical"
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Dashboard1" {...a11yProps(0)} />
//           <Tab label="Users2" {...a11yProps(1)} />
//           <Tab label="Account3" {...a11yProps(2)} />
//           <Tab label="Item Four4" {...a11yProps(3)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Dashboard
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Users
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <ProfileContainer />
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//     </Box>
//   );
// }
