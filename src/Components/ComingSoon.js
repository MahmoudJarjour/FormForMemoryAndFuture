import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

const ComingSoon = () => {
	return (
		<Box py={15}>
			<Container maxWidth="lg">
				<Grid container spacing={3} alignItems="center" justifyContent="center">
					<Grid item>
						<Typography variant="h3">Coming Soon</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ComingSoon;
