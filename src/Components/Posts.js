import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Posts = () => {
	const { t } = useTranslation();
	return (
		<Box sx={{ backgroundColor: '#ECEAE8' }} py={10}>
			<Container minWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
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
