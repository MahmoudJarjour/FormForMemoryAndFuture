import { useTheme } from '@emotion/react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import i18next from 'i18next';

const FirstSection = ({ data }) => {
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
		<Box pt={isMobileView ? 10 : 3} pb={isMobileView ? 10 : 3} name="FirstSection" sx={{ backgroundColor: '#221e38' }}>
			<Container maxWidth="lg">
				<Grid container spacing={3} justifyContent="space-between" alignItems="center">
					<Grid item xs={12} sm={12} md={6}>
						<Grid container data-aos="slide-up" spacing={3}>
							<Grid item xs={12}>
								<Typography variant={isMobileView ? 'h3' : 'h2'} color="white">
									{data[i18next.language].title}
								</Typography>
							</Grid>
							<Grid item data-aos="flip-up" xs={12}>
								<Typography color="white">{data[i18next.language].description}</Typography>
							</Grid>
						</Grid>
					</Grid>
					{!isMobileView && (
						<Grid item data-aos="slide-down" xs={12} md={5}>
							<img src={data[i18next.language].image} alt={data[i18next.language].title} style={{ width: '100%' }} />
						</Grid>
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default FirstSection;
