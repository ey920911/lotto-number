import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  item: {
    width: '6rem',
    margin: '0.2rem',
    textAlign: 'center',
    borderRadius: '30px',
    backgroundColor: '#FBEFFF',
  },
});

interface FilterItem {
  item: String;
}
function SearchListItem(filterItem: FilterItem) {
  const searchText = 'test';
  const classes = useStyles();

  const handleListItemClick = (event: any) => {
    const value = event.target.outerText;
    // TODO item 클릭시 하단에 선택한 item 뜨게하기
  };

  return (
    <ListItem
      className={classes.item}
      button
      onClick={(e) => handleListItemClick(e)}
    >
      <ListItemText primary={filterItem.item} />
    </ListItem>
  );
}
export default SearchListItem;
