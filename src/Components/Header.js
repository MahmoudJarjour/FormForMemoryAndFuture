import { Button, Stack, Grid, AppBar, Container, IconButton, useMediaQuery, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';
import { useTheme } from '@emotion/react';
import i18next from 'i18next';
import Social from './Social';

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}));

const Header = ({ data }) => {
	const { t, i18n } = useTranslation();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });
	console.log(data);
	const theme = useTheme();

	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<AppBar
				position="sticky"
				variant="none"
				style={{
					backgroundColor: trigger ? 'rgba(38, 33, 83, 0.9)' : 'rgba(38, 33, 83, 1)',
				}}
			>
				<Container>
					{isMobileView ? (
						<Grid container spacing={2} justifyContent="space-between" alignItems="center">
							<Grid item xs={3} sm={2}>
								<IconButton size="small" sx={{ color: 'white' }}>
									<Link underline="none" color="inherit" to="FirstSection">
										<img src="headerLogo.png" alt="Form For Memory And Future" style={{ width: '100%' }} />
									</Link>
								</IconButton>
							</Grid>
							<Grid item xs={2} sm={2}>
								<IconButton variant="contained" onClick={handleClick} sx={{ color: 'white' }}>
									<MenuIcon />
								</IconButton>
								<StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
									<MenuItem onClick={handleClose} disableRipple>
										<EditIcon />
										<Link to="Members" variant="none">
											{data.members[i18next.language].title}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<FileCopyIcon />
										<Link to="AboutUs" variant="none">
											{data.about[i18next.language].title}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<ArchiveIcon />
										<Link to="Posts" variant="none">
											{data.posts[i18next.language].title}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<MoreHorizIcon />
										<Link to="MemberShip" variant="none">
											{data.membership[i18next.language].title}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<MoreHorizIcon />
										<Link to="ContactUs" variant="none">
											{data.contact[i18next.language].title}
										</Link>
									</MenuItem>
									<Divider sx={{ my: 0.5 }} />
									<MenuItem>
										<Button
											href={i18next.language === 'ar' ? window.location.origin + '/en' : window.location.origin.replace('/en', '')}
											variant="none"
										>
											{i18n.language === 'ar' ? 'English' : 'العربية'}
										</Button>
									</MenuItem>
								</StyledMenu>
							</Grid>
						</Grid>
					) : (
						<Grid container spacing={2} alignItems="center" justifyContent="space-between">
							<Grid item>
								<Grid container spacing={2} alignItems="center">
									<Grid item>
										<IconButton size="small" sx={{ color: 'white' }}>
											<Link to="FirstSection" variant="none">
												<img src="headerLogo.png" alt="Form For Memory And Future" style={{ height: 90 }} />
											</Link>
										</IconButton>
									</Grid>
									<Grid item>
										<Stack direction="row" spacing={2} justifyContent="center">
											<Button sx={{ color: 'white', fontSize: '16px' }}>
												<Link to="Members" variant="none">
													<Typography>{data.members[i18next.language].title}</Typography>
												</Link>
											</Button>
											<Button sx={{ color: 'white', fontSize: '16px' }}>
												<Link to="AboutUs" variant="none">
													<Typography>{data.about[i18next.language].title}</Typography>
												</Link>
											</Button>
											<Button sx={{ color: 'white', fontSize: '16px' }}>
												<Link to="Posts" variant="none">
													<Typography>{data.posts[i18next.language].title}</Typography>
												</Link>
											</Button>
											<Button sx={{ color: 'white', fontSize: '16px' }}>
												<Link to="MemberShip" variant="none">
													<Typography>{data.membership[i18next.language].title}</Typography>
												</Link>
											</Button>
											<Button sx={{ color: 'white', fontSize: '16px' }}>
												<Link to="ContactUs" variant="none">
													<Typography>{data.contact[i18next.language].title}</Typography>
												</Link>
											</Button>
										</Stack>
									</Grid>
								</Grid>
							</Grid>

							<Grid item>
								<Grid container spacing={2}>
									<Grid item>
										<Social data={data.footer} />
									</Grid>

									<Grid item>
										<Button
											href={i18next.language === 'en' ? window.location.origin.replace('/en', '') : window.location.origin + '/en'}
											variant="none"
										>
											<Typography>{i18n.language === 'ar' ? 'English' : 'العربية'}</Typography>
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					)}
				</Container>
			</AppBar>
		</>
	);
};

export default Header;
