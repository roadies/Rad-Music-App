import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CalendarTodayIconOutlined from '@material-ui/icons/CalendarTodayOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MusicVideoOutlinedIcon from '@material-ui/icons/MusicVideoOutlined';
import {
  Form, Button, ButtonGroup,
} from 'react-bootstrap';
import SearchVenueLocation from './SearchVenue';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const SearchTab = ({ getShows }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState();
  const [field, setField] = useState('');
  const [searchView, setSearchView] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderSearchView = () => {
    if (searchView === 'date') {
      return (
        <div>
          <Form.Group controlId="formDate">
            <Form.Control
              style={{ marginTop: '10px' }}
              type="date"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <Button
              size="sm"
              style={{ marginTop: '10px' }}
              variant="outline-success"
              onClick={() => {
                getShows(data, field);
                setSearchView('');
              }}
            >
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
            <SearchVenueLocation setData={setData} />
            <ButtonGroup style={{ marginTop: '10px' }}>
              <Button
                size="sm"
                variant="outline-success"
                onClick={() => {
                  getShows(data, field);
                  setSearchView('');
                }}
              >
                Search
              </Button>
              <Button
                size="sm"
                variant="outline-success"
                onClick={() => {
                  getShows(data, field);
                  setSearchView('');
                }}
              >
                List View
              </Button>
            </ButtonGroup>

          </Form.Group>
        </div>
      );
    }
    if (searchView === 'band') {
      return (
        <div>
          <Form.Group>
            <Form.Control
              style={{ marginTop: '10px' }}
              placeholder="Enter Band Name"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
            <Button
              size="sm"
              type="submit"
              style={{ marginTop: '10px' }}
              variant="outline-success"
              onClick={() => {
                getShows(data, field);
                setSearchView('');
              }}
            >
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
            <Tab
              icon={<CalendarTodayIconOutlined />}
              aria-label="calendar"
              onClick={() => {
                setSearchView('date');
                setField('date');
              }}
            />
            <Tab
              icon={<MusicVideoOutlinedIcon />}
              aria-label="music"
              onClick={() => {
                setSearchView('band');
                setField('band');
              }}
            />
            <Tab
              icon={<RoomOutlinedIcon />}
              aria-label="room"
              onClick={() => {
                setSearchView('venue');
                setField('venue');
              }}
            />
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
