import { Grid, Container, Card, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import i18next from 'i18next';

const Video = ({ data }) => {
	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	}, []);
	return (
		<Box name="video" py={15} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container data-aos="flip-down">
					<Grid item xs={12} align="center">
						<Card elevation={0}>
							<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
								<iframe frameBorder={0} title="Form For Memory And Future" src={data[i18next.language]} />
							</CardMedia>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Video;
