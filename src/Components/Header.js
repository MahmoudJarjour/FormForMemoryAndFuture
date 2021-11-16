import { Button, Card, CardContent, Stack, Grid, AppBar, Container } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t, i18n } = useTranslation();

	return (
		<AppBar position="sticky" variant="none" sx={{ backgroundColor: 'rgba(38, 33, 83, 0.9)' }}>
			<Container>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={1} md={1}>
						<img src="headerLogo.png" style={{ width: '100%' }} />
					</Grid>
					<Grid item xs={12} md={8}>
						<Stack direction="row" spacing={1} justifyContent="center">
							<Button variant="none">Members</Button>
							<Button variant="none">Aboutus</Button>
							<Button variant="none">Posts</Button>
							<Button variant="none">MemberShip</Button>
							<Button variant="none">Contactus</Button>
							<Button variant="none">{i18n.language === 'ar' ? 'English' : 'العربية'}</Button>
						</Stack>
					</Grid>
					<Grid item xs={12} md={2}>
						<Stack direction="row" spacing={2}>
							<FacebookRoundedIcon variant="outlined" fontSize="medium" />
							<InstagramIcon variant="outlined" fontSize="medium" />
							<TwitterIcon variant="outlined" fontSize="medium" />
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
};

export default Header;
