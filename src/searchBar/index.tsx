import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onChange: (value: string) => void;
  placeHolder: string;
  defaultValue?: string;
}

const styles = {
  root: {
    width: '100%',
  }
}

const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = React.useState(props?.defaultValue ?? '');

  React.useEffect(() => {
    const debounce = setTimeout(() => {
      props.onChange(value);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    }
  }, [value, props]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <TextField 
      sx={styles.root}
      value={value}
      onChange={onChange}
      variant="filled"
      placeholder={props.placeHolder}
      InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
      }}
    />
  );
}

export default SearchBar;
