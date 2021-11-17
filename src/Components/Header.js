import { Button, Card, CardContent, Stack, Grid, AppBar, Container, IconButton, useMediaQuery, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import i18n from '../Locales/i18n';
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

import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useTheme } from '@emotion/react';
import i18next from 'i18next';

const langLink = i18next.language === 'en' ? window.location.origin + '/ar' : window.location.origin.replace('/ar', '');

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

const Header = () => {
	const { t, i18n } = useTranslation();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

	const theme = useTheme();

	const isMatchs = useMediaQuery(theme.breakpoints.down('md'));

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
					{isMatchs ? (
						<Grid container spacing={2} justifyContent="space-between" alignItems="center">
							<Grid item xs={1} sm={1}>
								<Link underline="none" color="inherit" to="/">
									<img src="headerLogo.png" style={{ width: '100%' }} />
								</Link>
							</Grid>
							<Grid item xs={2} sm={2}>
								<Button
									id="demo-customized-button"
									aria-controls="demo-customized-menu"
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									variant="contained"
									disableElevation
									onClick={handleClick}
								>
									<MenuIcon />
								</Button>
								<StyledMenu
									id="demo-customized-menu"
									MenuListProps={{
										'aria-labelledby': 'demo-customized-button',
									}}
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose} disableRipple>
										<EditIcon />
										<Link to="Members" variant="none">
											{t('Members')}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<FileCopyIcon />
										<Link to="AboutUs" variant="none">
											{t('AboutUs')}
										</Link>
									</MenuItem>
									<Divider sx={{ my: 0.5 }} />
									<MenuItem onClick={handleClose} disableRipple>
										<ArchiveIcon />
										<Link to="Posts" variant="none">
											{t('POSTS')}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<MoreHorizIcon />
										<Link to="MemberShip" variant="none">
											{t('Membership')}
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose} disableRipple>
										<MoreHorizIcon />
										<Link to="ContactUs" variant="none">
											{t('Contact us')}
										</Link>
									</MenuItem>

									<MenuItem>
										<IconButton>
											<Link href="https://www.facebook.com/pg/memoryfuturelb/posts/" target="_blank">
												<FacebookRoundedIcon sx={{ color: '#262153' }} variant="outlined" fontSize="medium" />
											</Link>
										</IconButton>

										<IconButton>
											<Link href="https://www.instagram.com/" target="_blank">
												<InstagramIcon sx={{ color: '#262153' }} variant="outlined" fontSize="medium" />
											</Link>
										</IconButton>

										<IconButton>
											<Link href="https://twitter.com/" target="_blank">
												<TwitterIcon sx={{ color: '#262153' }} variant="outlined" fontSize="medium" />
											</Link>
										</IconButton>
									</MenuItem>
									<MenuItem>
										<Button href={langLink} variant="none">
											{i18n.language === 'ar' ? 'English' : 'العربية'}
										</Button>
									</MenuItem>
								</StyledMenu>
							</Grid>
						</Grid>
					) : (
						<Grid container spacing={2} alignItems="center">
							<Grid item xs={1} md={1}>
								<img src="headerLogo.png" style={{ width: '100%' }} />
							</Grid>
							<Grid item xs={12} md={8}>
								<Stack direction="row" spacing={2} justifyContent="center">
									<Link to="Members" variant="none">
										{t('Members')}
									</Link>
									<Link to="AboutUs" variant="none">
										{t('AboutUs')}
									</Link>
									<Link to="Posts" variant="none">
										{t('POSTS')}
									</Link>
									<Link to="MemberShip" variant="none">
										{t('Membership')}
									</Link>
									<Link to="ContactUs" variant="none">
										{t('Contact us')}
									</Link>
								</Stack>
							</Grid>

							<Grid item xs={12} md={2}>
								<Stack direction="row" spacing={2}>
									<IconButton>
										<Link href="https://www.facebook.com/pg/memoryfuturelb/posts/" target="_blank">
											<FacebookRoundedIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
										</Link>
									</IconButton>
									<IconButton>
										<Link href="https://www.instagram.com/" target="_blank">
											<InstagramIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
										</Link>
									</IconButton>
									<IconButton>
										<Link href="https://twitter.com/" target="_blank">
											<TwitterIcon sx={{ color: 'white' }} variant="outlined" fontSize="medium" />
										</Link>
									</IconButton>
									<Button href={langLink} variant="none">
										<Typography>{i18n.language === 'ar' ? 'English' : 'العربية'}</Typography>
									</Button>
								</Stack>
							</Grid>
						</Grid>
					)}
				</Container>
			</AppBar>
		</>
	);
};

export default Header;
