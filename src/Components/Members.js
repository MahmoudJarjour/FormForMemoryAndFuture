import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Members = () => {
	const { t } = useTranslation();
	return (
		<Box sx={{ backgroundColor: '#ECEAE8' }} pt={10} pb={10}>
			<Container minWidth="lg">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{t('Members')}
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={3}>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<img
											src="1.png"
											style={{
												width: '100%',
												borderRadius: '100%',
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h5" align="center">
											First Member
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={3}>
								<Grid container spacing={1} justifyContent="center" alignItems="center">
									<Grid item xs={12}>
										<img
											src="2.png"
											style={{
												width: '100%',
												borderRadius: '100%',
											}}
										/>
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h5" align="center">
											Second Member
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={3}>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<img
											src="3.png"
											style={{
												width: '100%',
												borderRadius: '100%',
											}}
										/>
									</Grid>

									<Grid item xs={12}>
										<Typography variant="h5" align="center">
											Third Person
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={3}>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<img
											src="3.png"
											style={{
												width: '100%',
												borderRadius: '100%',
											}}
										/>
									</Grid>

									<Grid item xs={12}>
										<Typography variant="h5" align="center">
											Third Person
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Members;
