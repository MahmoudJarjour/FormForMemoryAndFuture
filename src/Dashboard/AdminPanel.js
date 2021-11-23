import React, { useState } from 'react';
import { Typography, Toolbar, List, Box, Divider, Container, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PostAddIcon from '@mui/icons-material/PostAdd';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import { Copyright } from './CopyRight';
import EditVideo from './EditVideo';
import Subscribers from './Subscribers';
import ContentInfo from './ContentInfo';
import EditMember from './EditMember';
import EditPosts from './EditPosts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import i18next from 'i18next';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

export default function AdminPanel() {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const { t } = useTranslation();

	const [selectedButton, setSelectedButton] = useState(0);

	const content = [
		{
			id: 1,
			label: t('Video'),
			component: <EditVideo />,
			icon: <VideoSettingsIcon sx={{ color: '#524fa1' }} />,
		},
		{
			id: 2,
			label: t('Members'),
			component: <EditMember />,
			icon: <PeopleIcon sx={{ color: '#524fa1' }} />,
		},
		{
			id: 3,
			label: t('POSTS'),
			component: <EditPosts />,
			icon: <PostAddIcon sx={{ color: '#524fa1' }} />,
		},
		{
			id: 4,
			label: t('Subscribers'),
			component: <Subscribers />,
			icon: <LayersIcon sx={{ color: '#524fa1' }} />,
		},
		{
			id: 5,
			label: t('CONTENT INFO'),
			component: <ContentInfo />,
			icon: <ContactPageIcon sx={{ color: '#524fa1' }} />,
		},
	];

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="absolute" open={open}>
				<Toolbar
					sx={{
						pr: '24px', // keep right padding when drawer closed
					}}
				>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						sx={{
							marginRight: '36px',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>

					<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
						{t('Forum for Memory and Future')}
					</Typography>

					<IconButton>
						<Link underline="none" to="/LogIn">
							<LogoutIcon sx={{ color: 'white', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }} />
						</Link>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<Toolbar
					sx={{
						display: 'flex',
						px: [1],
					}}
				>
					<DashboardIcon sx={{ flex: 0.5 }} />
					<Typography sx={{ alignItems: 'center', justifyContent: 'flex-start', px: [3] }}>{t('DashBoard')}</Typography>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon sx={{ justifyContent: 'flex-end', transform: getLanguage() === 'ar' ? 'scaleX(-1)' : '' }} />
					</IconButton>
				</Toolbar>
				<Divider />
				<List>
					{content.map((item, index) => (
						<ListItem key={item.id} button onClick={() => setSelectedButton(index)}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.label} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
			>
				<Toolbar />
				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					{/* {content Section} */}

					{content[selectedButton].component}
					<Copyright sx={{ pt: 4 }} />
				</Container>
			</Box>
		</Box>
	);
}
