import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { inject } from 'mobx-react';
import DreamStore from 'store/DreamStore';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    height: '1.5rem',
    padding: '0 1rem',
    margin: '0.2rem',
    textAlign: 'center',
    borderRadius: '30px',
    border: 0,
    backgroundColor: '#FBEFFF',
    '&.hover': {
      backgroundColor: 'gray',
    },
  },
});

interface FilterItem {
  item: String;
}
export default function SearchListItem(filterItem: FilterItem) {
  const classes = useStyles();

  const handleListItemClick = (event: any) => {
    const value = event.target.innerText;
    console.dir(event.target.innerText);
    DreamStore.addItem(value);
  };

  return (
    <button className={classes.item} onClick={(e) => handleListItemClick(e)}>
      {filterItem.item}
    </button>
  );
}
inject('DreamStore');
