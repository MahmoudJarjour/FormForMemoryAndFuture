import { Grid, Container, Card, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import i18next from 'i18next';

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

const Video = () => {
	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);
	return (
		<Box name="video" py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container data-aos="flip-down">
					<Grid item xs={12} align="center">
						<Card elevation={0}>
							<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
								<iframe frameBorder={0} title="Form For Memory And Future" src="https://www.youtube.com/embed/EmUa_tcSM-k" />
							</CardMedia>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Video;
