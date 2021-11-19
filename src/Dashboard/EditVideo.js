import { Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
export default function EditVideo() {
	const [UrlenVideo, SetUrlenVideo] = useState('');

	const handleUrlenVideo = (event) => {
		SetUrlenVideo(event.target.value);
	};

	const [UrlarVideo, SetUrlarVideo] = useState('');

	const handleUrlarVideo = (event) => {
		SetUrlarVideo(event.target.value);
	};
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
											<Typography variant="h6">English Video:</Typography>
											<TextField
												required
												label="Enter URL Of Video "
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
											<CardMedia style={{ paddingTop: '56.25%', position: 'relative', width: '100%' }}>
												<iframe frameBorder={0} title="Form For Memory And Future" src="https://www.youtube.com/embed/EmUa_tcSM-k" />
											</CardMedia>
										</Grid>
										<Grid item xs={12} md={6}>
											<Typography variant="h6">Arabic Video:</Typography>
											<TextField
												required
												label="Enter URL Of Video "
												value={UrlarVideo}
												onChange={handleUrlarVideo}
												variant="outlined"
												fullWidth
											/>
										</Grid>
									</Grid>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" startIcon={<UpdateOutlinedIcon />} component="span">
									update
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
