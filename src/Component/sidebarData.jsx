import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';

export const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        to: '/home'
    },
    {
        title: 'About',
        icon: <InfoIcon />,
        to: '/about',
    },
    {
        title: 'Contact',
        icon: <CallIcon />,
        to: '/contact',
    },
]