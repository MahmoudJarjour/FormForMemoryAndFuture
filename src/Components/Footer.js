import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<Container name="Footer" sx={{ maxWidth: '100%' }}>
			<Grid container spacing={2} alignItems="center" mt={5}>
				<Grid item xs={12} md={2}>
					<img src="logo.png" alt="Form For Memory And Future" style={{ width: '100%' }} />
				</Grid>
				<Grid item xs={12} md={8} align="center" alignItems="center">
					<Typography>{t('Copyright')} © 2021 Forum for Memory and Future.</Typography>
				</Grid>
				<Grid item xs={12} md={2}>
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
			</Grid>
		</Container>
	);
};

export default Footer;
