import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CalendarTodayIconOutlined from '@material-ui/icons/CalendarTodayOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import {
  Form, Button,
} from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const SearchTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchView, setSearchView] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderSearchView = () => {
    if (searchView === 'date') {
      return (
        <div>
          <Form.Group controlId="formDate">
            <Form.Label>Input Date Below</Form.Label>
            <Form.Control
              type="date"
            />
            <Button size="sm" onClick={() => setSearchView('')}>
              Search
            </Button>
          </Form.Group>
        </div>
      );
    }
    if (searchView === 'venue') {
      return (
        <div>
          <Form.Group>
            <Form.Label>Input Venue Below</Form.Label>
            <Form.Control />
            <Button size="sm" onClick={() => setSearchView('')}>
              Search
            </Button>
          </Form.Group>
        </div>
      );
    }
    if (searchView === 'name') {
      return (
        <div>
          <Form.Group>
            <Form.Label>Input Band Below</Form.Label>
            <Form.Control />
            <Button size="sm" onClick={() => setSearchView('')}>
              Search
            </Button>
          </Form.Group>
        </div>
      );
    }
    return (
      <div style={{ padding: '10px' }}>
        <Form.Text className="text-muted">
          Please select your search type ( Date, Band-name, Venue )
        </Form.Text>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab icon={<CalendarTodayIconOutlined />} aria-label="calendar" onClick={() => setSearchView('date')} />
            <Tab icon={<MusicVideoOutlinedIcon />} aria-label="music" onClick={() => setSearchView('name')} />
            <Tab icon={<RoomOutlinedIcon />} aria-label="room" onClick={() => setSearchView('venue')} />
          </Tabs>
        </Paper>
      </div>
      <div>
        {renderSearchView()}
      </div>
    </div>
  );
};

export default SearchTab;
