import { Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
	return (
		<Box>
			<Container minWidth="lg">
				<Grid container spacing={2} my={5}>
					<Grid item xs={12}>
						<ReactPlayer width="100%" muted url="https://youtu.be/vr0qNXmkUJ8" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Video;
