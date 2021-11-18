import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

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
								<Stack direction="column" spacing={2}>
									<Typography variant="h6">English Video:</Typography>
									<TextField
										required
										id="standard-Name"
										label="Enter URL Of Video "
										value={UrlenVideo}
										onChange={handleUrlenVideo}
										variant="outlined"
										fullWidth
									/>
									<Typography variant="h6">Arabic Video:</Typography>
									<TextField
										required
										id="standard-Name"
										label="Enter URL Of Video "
										value={UrlarVideo}
										onChange={handleUrlarVideo}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" component="span">
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
