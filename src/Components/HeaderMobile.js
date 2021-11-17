import React from 'react';
import { Box } from '@mui/system';
import { AppBar, Container, Hidden, Typography } from '@mui/material';
const sections = [
	{
		title: 'members',
		name: 'members',
	},
	{
		title: 'AboutUs',
		name: 'AboutUs',
	},
	{
		title: 'POSTS',
		name: 'Posts',
	},
	{
		title: 'Membership',
		name: 'MemberShip',
	},
	{
		title: 'ContactUs',
		name: 'ContactUs',
	},
];

const langLink = i18n.language === 'en' ? window.location.origin + '/ar' : window.location.origin.replace('/ar', '');

const MobileHeader = () => {
	return (
		<Box mb={20}>
			<AppBar elevation={1}>
				<Container maxWidth="lg">
					<Grid Container direction="row" justify="space-between" alignItems="center">
						<Grid item xs={4} sm={3} md={2}>
							<img src="headerLogo.png" style={{ width: '100%' }} />
						</Grid>

						<Hidden mdDown>
							<Grid item>
								<Button href={langLink} variant="none">
									{i18n.language === 'ar' ? 'English' : 'العربية'}
								</Button>
								<Stack direction="row" spacing={2} justifyContent="center">
									<Link href="https://www.facebook.com/pg/memoryfuturelb/posts/" target="_blank">
										<FacebookRoundedIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
									</Link>

									<Link href="https://www.instagram.com/" target="_blank">
										<InstagramIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
									</Link>
									<Link href="https://twitter.com/" target="_blank">
										<TwitterIcon sx={{ color: '#524fa1' }} variant="outlined" fontSize="medium" />
									</Link>
								</Stack>
							</Grid>
						</Hidden>
					</Grid>
				</Container>
			</AppBar>
		</Box>
	);
};

export default MobileHeader;
