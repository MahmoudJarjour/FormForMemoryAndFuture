import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function EditPostSection() {
	const { t } = useTranslation();
	const [EnglishPostTitle, SetEnglishPostTitle] = useState('');
	const handleEnglishPostTitle = (event) => {
		SetEnglishPostTitle(event.target.value);
	};

	const [ArabicPostTitle, SetArabicPostTitle] = useState('');
	const handleArabicPostTitle = (event) => {
		SetArabicPostTitle(event.target.value);
	};

	const content = [
		{
			Posttitle: 'English Post Title:',
			PostTitlelabel: 'Enter English Post Title',
			PostTitlevalue: EnglishPostTitle,
			PostTitleonchange: handleEnglishPostTitle,
		},
		{
			Posttitle: 'Arabic Post Title:',
			PostTitlelabel: 'Enter Arabic Post Title',
			PostTitlevalue: ArabicPostTitle,
			PostTitleonchange: handleArabicPostTitle,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">Editing Posts Section</Typography>
						</Grid>
						{content.map((item) => (
							<Grid item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									<Typography>{item.Posttitle}</Typography>
									<TextField
										required
										label={item.PostTitlelabel}
										value={item.PostTitlevalue}
										onChange={item.PostTitleonchange}
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
