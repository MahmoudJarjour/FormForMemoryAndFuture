import { Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
	return (
		<Box py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container minWidth="lg">
				<Grid container>
					<Grid item xs={12} align="center">
						<ReactPlayer width="820px" height="460px" playing muted loop url="https://youtu.be/vr0qNXmkUJ8" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Video;
