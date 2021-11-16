import { Button, Container, Grid, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupIcon from '@mui/icons-material/Group';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { Box } from '@mui/system';

const AboutUs = () => {
	const { t } = useTranslation();
	return (
		<Box py={10} sx={{ backgroundColor: '#F7F4F2' }}>
			<Container minWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h3" color="#524fa1" fontWeight="600">
							{' '}
							{t('AboutUs')}{' '}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography>{t('FirstSectionText')}</Typography>
					</Grid>

					{/* { First 3 items } */}
					<Grid item xs={12} mt={3}>
						<Grid container spacing={2} justifyContent="center" alignItems="center">
							<Grid item xs={12} md={4}>
								<Grid container spacing={2} justifyContent="center" alignItems="center">
									<Grid item xs={12} align="center">
										<ThumbUpAltIcon variant="outlined" fontSize="large" sx={{ color: '#524fa1' }} />
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h4" align="center">
											{t('Give up violence')}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography align="center">{t('Prevent the use of armed violence as a means of dealing with conflicts')}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4}>
								<Grid container spacing={2} justifyContent="center" alignItems="center">
									<Grid item xs={12} align="center">
										<GavelIcon variant="outlined" fontSize="large" sx={{ color: '#524fa1' }} />
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h4" align="center">
											{t('Saving rights')}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography align="center">{t('Highlight the right of the Lebanese ')}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4}>
								<Grid container spacing={2} justifyContent="center" alignItems="center">
									<Grid item xs={12} align="center">
										<GroupIcon variant="outlined" fontSize="large" sx={{ color: '#524fa1' }} />
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h4" align="center">
											{t('Respect individuals')}
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<Typography align="center">
											{t('Establish a common life based on the respect of the rights of individuals and groups.')}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>

						{/* {Second 2 Items } */}
						<Grid container spacing={2} mt={5} justifyContent="center" alignItems="center">
							<Grid item xs={12} md={6}>
								<Grid container spacing={2} justifyContent="center" alignItems="center">
									<Grid item xs={12} align="center">
										<CloudDownloadIcon variant="outlined" fontSize="large" sx={{ color: '#524fa1' }} />
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h4" align="center">
											{t('Download Documents')}
										</Typography>
									</Grid>
									<Grid item xs={12} align="center">
										<Button variant="contained" startIcon={<CloudDownloadIcon />} sx={{ backgroundColor: '#524fa1' }}>
											{t('Download Documents')}
										</Button>
									</Grid>
								</Grid>
							</Grid>

							<Grid item xs={12} md={6}>
								<Grid container spacing={2} justifyContent="center" alignItems="center">
									<Grid item xs={12} align="center">
										<DriveFileMoveIcon variant="outlined" fontSize="large" sx={{ color: '#524fa1' }} />
									</Grid>
									<Grid item xs={12}>
										<Typography variant="h4" align="center">
											{t('Browse Archive')}
										</Typography>
									</Grid>
									<Grid item xs={12} align="center">
										<Button variant="contained" startIcon={<DriveFileMoveIcon />} sx={{ backgroundColor: '#524fa1' }}>
											{t('Browse Archive')}
										</Button>
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
export default AboutUs;
