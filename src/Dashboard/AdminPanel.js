import * as React from 'react';
import { Typography, Toolbar, List, Box, Divider, Container, Grid, Paper, Link, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

function Copyright(props) {
	const { t } = useTranslation();
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{t('Copyright')}
			{' © '}
			<Link color="inherit" href="#">
				{t('Forum for Memory and Future')}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

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
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const { t } = useTranslation();
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
						'Forum for Memory and Future'
					</Typography>
					<IconButton color="inherit">
						<LogoutIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						px: [1],
					}}
				>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</Toolbar>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary={t('Dashboard')} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCartIcon />
						</ListItemIcon>
						<ListItemText primary={t('Video')} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary={t('Members')} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<BarChartIcon />
						</ListItemIcon>
						<ListItemText primary={t('POSTS')} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<LayersIcon />
						</ListItemIcon>
						<ListItemText primary={t('Subscribers')} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<LayersIcon />
						</ListItemIcon>
						<ListItemText primary={t('Contact Info')} />
					</ListItem>
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

					<Typography>Here we Have the content sections</Typography>

					<Copyright sx={{ pt: 4 }} />
				</Container>
			</Box>
		</Box>
	);
}
