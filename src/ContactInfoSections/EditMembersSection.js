import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditMembersSection() {
	const { t } = useTranslation();
	const [EnglishTitle, SetEnglishTitle] = useState('');
	const handleEnglishTitle = (event) => {
		SetEnglishTitle(event.target.value);
	};

	const [ArabicTitle, SetArabicTitle] = useState('');
	const handleArabicTitle = (event) => {
		SetArabicTitle(event.target.value);
	};

	const content = [
		{
			title: 'English Title:',
			Titlelabel: 'Enter English Title',
			Titlevalue: EnglishTitle,
			Titleonchange: handleEnglishTitle,
		},
		{
			title: 'Arabic Title:',
			Titlelabel: 'Enter Arabic Title',
			Titlevalue: ArabicTitle,
			Titleonchange: handleArabicTitle,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">Editing Members Section</Typography>
						</Grid>
						{content.map((item) => (
							<Grid item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									<Typography>{item.title}</Typography>
									<TextField
										required
										label={item.Titlelabel}
										value={item.Titlevalue}
										onChange={item.Titleonchange}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
						))}
						<Grid item xs={12}>
							<Button variant="contained" sx={{ backgroundColor: '#524fa1' }}>
								{t('Submit')}
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}