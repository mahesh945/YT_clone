import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import Login from './Login';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  

  return (
    <>
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        display:'flex',
        flex:1,
        pl: 2,
        minWidth:0,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      
      
    </Paper>
    <Button className='sign-in'>
      Sign in
    </Button>
    
    </>
  );
};

export default SearchBar;