import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function EditSocialIcons() {
	const [Urlicon, SetUrlicon] = useState('');

	const handleUrlicon = (event) => {
		SetUrlicon(event.target.value);
	};

	return (
		<Grid contianer spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={12}>
				<Card variant="none">
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h6">Editing Icons Section</Typography>
							</Grid>
							<Grid item xs={12}>
								<Stack direction="column" spacing={2}>
									<Typography variant="h6"> Icon Url:</Typography>
									<TextField required label="Enter URL Of Icon " value={Urlicon} onChange={handleUrlicon} variant="outlined" fullWidth />

									<Typography>Choose an icon</Typography>
									<label htmlFor="contained-button-file">
										<Input accept="image/*" multiple type="file" />
									</label>
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
