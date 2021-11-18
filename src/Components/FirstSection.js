import { useTheme } from '@emotion/react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const FirstSection = () => {
	const { t } = useTranslation();

	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Box pt={isMobileView ? 10 : 3} pb={isMobileView ? 10 : 3} name="FirstSection" sx={{ backgroundColor: '#262153' }}>
			<Container maxWidth="lg">
				<Grid container spacing={3} justifyContent="space-between" alignItems="center">
					<Grid item xs={12} sm={12} md={6}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant={isMobileView ? 'h3' : 'h2'} color="white">
									{t('Forum for Memory and Future')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography color="white">{t('FirstSectionText')}</Typography>
							</Grid>
						</Grid>
					</Grid>
					{!isMobileView && (
						<Grid item xs={12} md={5}>
							<img src="whitelogo.png" alt="Form For Memory And Future" style={{ width: '100%' }} />
						</Grid>
					)}
				</Grid>
			</Container>
		</Box>
	);
};

export default FirstSection;
