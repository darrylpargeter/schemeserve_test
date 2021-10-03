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

const IconCell = (props: IconCellProps) => {
  const Icon: typeof SvgIcon = iconTypes[props.type];

  return (
    <Box><Icon />{props.text}</Box>
  );
}

export default IconCell;
