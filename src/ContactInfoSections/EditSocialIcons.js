import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditSocialIcons() {
	const [Urlicon, SetUrlicon] = useState('');

	const handleUrlicon = (event) => {
		SetUrlicon(event.target.value);
	};

	const [Image, SetImage] = useState('');

	const handleImage = (event) => {
		SetImage(event.target.value);
	};
	const { t } = useTranslation();
	return (
		<Grid contianer spacing={2} justifyContent="center" alignItems="center">
			<Grid item xs={12}>
				<Card variant="none">
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography variant="h6">{t('Editing Icons Section')}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Stack direction="column" spacing={2}>
									<Typography> Site URL:</Typography>
									<TextField required label="Enter URL Of Icon " value={Urlicon} onChange={handleUrlicon} variant="outlined" fullWidth />

									<Typography>Choose an icon</Typography>
									<label htmlFor="contained-button-file">
										<Input accept="image/*" multiple type="file" value={Image} onChange={handleImage} />
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
