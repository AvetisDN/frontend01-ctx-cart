import { Tab, Tabs, Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views';
import React, {useState} from 'react'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function ProductDetails(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}  aria-label="simple tabs example">
                <Tab label='Description' {...a11yProps(0)} />
                <Tab label='Attributes' {...a11yProps(1)} />
                <Tab label='User Reviews' {...a11yProps(2)} />
            </Tabs>

            <SwipeableViews
                axis='x'
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    {props.description}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Attributes
                </TabPanel>
                <TabPanel value={value} index={2}>
                    User Reviews
                </TabPanel>
            </SwipeableViews>
            
        </div>
    )
}
