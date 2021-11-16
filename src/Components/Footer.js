import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<Container sx={{ minWidth: '100%' }}>
			<Grid container spacing={2} alignItems="center" mt={5}>
				<Grid item xs={12} md={2}>
					<img src="logo.png" style={{ width: '100%' }} />
				</Grid>
				<Grid item xs={12} md={8} align="center">
					<Typography>{t('Copyright')} © 2021 Forum for Memory and Future.</Typography>
				</Grid>
				<Grid item xs={12} md={2}>
					<Grid container spacing={1} alignItems="center">
						<Grid item xs={12} md={4}>
							<FacebookRoundedIcon variant="outlined" fontSize="medium" sx={{ color: '#524fa1' }} />
						</Grid>
						<Grid item xs={12} md={4}>
							<InstagramIcon variant="outlined" fontSize="medium" sx={{ color: '#524fa1' }} />
						</Grid>
						<Grid item xs={12} md={4}>
							<TwitterIcon variant="outlined" fontSize="medium" sx={{ color: '#524fa1' }} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
