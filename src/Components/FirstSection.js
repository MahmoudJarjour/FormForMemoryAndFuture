import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FirstSection = () => {
	const { t } = useTranslation();
	return (
		<Box sx={{ backgroundColor: '#262153' }}>
			<Container maxWidth="lg">
				<Grid container spacing={3} justifyContent="space-between" alignItems="center">
					<Grid item xs={12} md={6} mx={2}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h1" color="white">
									{t('Forum for Memory and Future')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h3" color="white">
									{t('FirstSectionText')}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={5} mx={2}>
						<img src="whitelogo.png" style={{ width: '100%' }} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default FirstSection;
