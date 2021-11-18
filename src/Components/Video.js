import { Grid, Container, Card, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Video = () => {
	return (
		<Box name="video" py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container maxWidth="lg">
				<Grid container>
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
