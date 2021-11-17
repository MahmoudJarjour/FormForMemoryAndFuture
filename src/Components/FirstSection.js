import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

const FirstSection = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box pt={3} pb={3} sx={{ backgroundColor: '#262153' }}>
				<Container maxWidth="lg">
					<Grid container spacing={3} justifyContent="space-between" alignItems="center">
						<Grid item xs={12} md={6}>
							<Grid container spacing={3}>
								<Grid item xs={12}>
									<Typography variant="h2" color="white">
										{t('Forum for Memory and Future')}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography color="white">{t('FirstSectionText')}</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={5}>
							<img src="whitelogo.png" style={{ width: '100%' }} />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default FirstSection;
