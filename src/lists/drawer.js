import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import TapasIcon from '@mui/icons-material/Tapas';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ViewComfyRoundedIcon from '@mui/icons-material/ViewComfyRounded';

export const DrawerList = [
    {
        name: 'Home',
        icon: <HomeTwoToneIcon />,
        link: '/'
    },
    {
        name: 'All Services',
        icon: <ViewComfyRoundedIcon />,
        link: '/services'
    },
    {
        name: 'Party Hall',
        icon: <AccountBalanceTwoToneIcon />,
        link: '/services/Place'
    },
    {
        name: 'Food',
        icon: <TapasIcon />,
        link: '/services/Food'
    },
    {
        name: 'Clothe & Shoe',
        icon: <CheckroomIcon />,
        link: '/services/Clothe & Shoe'
    },
    {
        name: 'Material',
        icon: <LocalMallIcon />,
        link: '/services/Material'
    }
]