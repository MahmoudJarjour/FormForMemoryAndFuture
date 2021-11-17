import { Grid, Container, Card, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
	return (
		<Box py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item xs={12} align="center">
						<Card elevation={0}>
							<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
								<iframe frameBorder={0} src="https://www.youtube.com/embed/EmUa_tcSM-k" />
							</CardMedia>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Video;
