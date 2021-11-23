import { useTheme } from '@emotion/react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FirstSection = () => {
	const { t } = useTranslation();

	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);

	return (
		<Box pt={isMobileView ? 10 : 3} pb={isMobileView ? 10 : 3} name="FirstSection" sx={{ backgroundColor: '#262153' }}>
			<Container maxWidth="lg">
				<Grid container spacing={3} justifyContent="space-between" alignItems="center">
					<Grid item xs={12} sm={12} md={6}>
						<Grid container data-aos="slide-up" spacing={3}>
							<Grid item xs={12}>
								<Typography variant={isMobileView ? 'h3' : 'h2'} color="white">
									{t('Forum for Memory and Future')}
								</Typography>
							</Grid>
							<Grid item data-aos="flip-up" xs={12}>
								<Typography color="white">{t('FirstSectionText')}</Typography>
							</Grid>
						</Grid>
					</Grid>
					{!isMobileView && (
						<Grid item data-aos="slide-down" xs={12} md={5}>
							<img src="whitelogo.png" alt="Form For Memory And Future" style={{ width: '100%' }} />
						</Grid>
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default FirstSection;
