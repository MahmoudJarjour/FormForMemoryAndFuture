import { Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { useTranslation } from 'react-i18next';
export default function EditVideo() {
	const [UrlenVideo, SetUrlenVideo] = useState('');

	const handleUrlenVideo = (event) => {
		SetUrlenVideo(event.target.value);
	};

	const [UrlarVideo, SetUrlarVideo] = useState('');

	const handleUrlarVideo = (event) => {
		SetUrlarVideo(event.target.value);
	};

	const { t } = useTranslation();
	return (
		<Grid contianer spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={12}>
				<Card variant="none">
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Stack direction="column">
									<Grid container spacing={2} alignItems="center">
										<Grid item xs={12} md={6}>
											<Typography variant="h6">{t('English Video:')}</Typography>
											<TextField
												required
												label={t('Enter URL Of Video')}
												value={UrlenVideo}
												onChange={handleUrlenVideo}
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
												<iframe frameBorder={0} title="Form For Memory And Future" src="https://www.youtube.com/embed/EmUa_tcSM-k" />
											</CardMedia>
										</Grid>
									</Grid>

									<Grid container spacing={2} alignItems="center" pt={5}>
										<Grid item xs={12} md={6}>
											<Typography variant="h6">{t('Arabic Video:')}</Typography>
											<TextField
												required
												label={t('Enter URL Of Video')}
												value={UrlarVideo}
												onChange={handleUrlarVideo}
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
												<iframe frameBorder={0} title="Form For Memory And Future" src="https://www.youtube.com/embed/EmUa_tcSM-k" />
											</CardMedia>
										</Grid>
									</Grid>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" startIcon={<UpdateOutlinedIcon />} component="span">
									{t('Update')}
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
