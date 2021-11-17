import { Button, Card, CardContent, Stack, Grid, AppBar, Container, IconButton } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import i18n from '../Locales/i18n';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const langLink = i18n.language === 'en' ? window.location.origin + '/ar' : window.location.origin.replace('/ar', '');

const Header = () => {
	const { t, i18n } = useTranslation();
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

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
									{i18n.language === 'ar' ? 'English' : 'العربية'}
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</AppBar>
		</>
	);
};

export default Header;
