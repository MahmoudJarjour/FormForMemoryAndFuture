import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Posts = () => {
	const { t } = useTranslation();
	return (
		<Box sx={{ backgroundColor: '#e0e0e0' }}>
			<Container minWidth="lg">
				<Grid container spacing={2} my={5}>
					<Grid item xs={12}>
						<Typography variant="h1" color="#524fa1">
							{t('POSTS')}
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<img src="post1.png" style={{ width: '100%' }} />
					</Grid>

					<Grid item xs={12} md={4}>
						<img src="post2.png" style={{ width: '100%' }} />
					</Grid>

					<Grid item xs={12} md={4}>
						<img src="post3.png" style={{ width: '100%' }} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Posts;
