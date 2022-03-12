import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchListItem from './SearchListItem';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

interface Data {
  filteredData: String[];
}

function SearchList(data: Data) {
  const filterData = data.filteredData;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {filterData.map((data) => (
        <SearchListItem item={data} />
      ))}
    </div>
  );
}
export default SearchList;
