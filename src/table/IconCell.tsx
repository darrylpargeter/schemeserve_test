import StarIcon from '@mui/icons-material/Star';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Box from '@mui/material/Box';

import SvgIcon from '@mui/material/SvgIcon/SvgIcon';

const iconTypes: Record<string, typeof SvgIcon> = {
  fork: RestaurantIcon,
  star: StarIcon,
}

interface IconCellProps {
  text: string;
  type: 'star' | 'fork';
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  },
  fork: {
    fill: 'gray',
  },
  star: {
    fill: 'gold',
  },
};

const IconCell = (props: IconCellProps) => {
  const Icon: typeof SvgIcon = iconTypes[props.type];

  return (
    <Box sx={styles.root}><Icon sx={styles[props.type]} />{props.text}</Box>
  );
}

export default IconCell;
