import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import TapasIcon from '@mui/icons-material/Tapas';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const DrawerList = [
    {
        name: 'Home',
        icon: <HomeTwoToneIcon />,
        link: '/'
    },
    {
        name: 'Party Hall',
        icon: <AccountBalanceTwoToneIcon />,
        link: '/PartyHalls'
    },
    {
        name: 'Food',
        icon: <TapasIcon />,
        link: '/Food'
    },
    {
        name: 'Clothes',
        icon: <LocalMallIcon />,
        link: '/Clothes'
    }
]