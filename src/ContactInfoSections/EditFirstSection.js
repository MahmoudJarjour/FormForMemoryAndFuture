import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditFirstSection() {
	const { t } = useTranslation();
	const [EnglishTitle, SetEnglishTitle] = useState('');
	const handleEnglishTitle = (event) => {
		SetEnglishTitle(event.target.value);
	};

	const [EnglishDiscription, SetEnglishDiscription] = useState('');
	const handleEnglishDiscription = (event) => {
		SetEnglishDiscription(event.target.value);
	};

	const [EnglishImage, SetEnglishImage] = useState([]);
	const handleEnglishImage = (event) => {
		SetEnglishImage(event.target.value);
	};

	const [ArabicTitle, SetArabicTitle] = useState('');
	const handleArabicTitle = (event) => {
		SetArabicTitle(event.target.value);
	};

	const [ArabicDiscription, SetArabicDiscription] = useState('');
	const handleArabicDiscription = (event) => {
		SetArabicDiscription(event.target.value);
	};

	const [ArabicImage, SetArabicImage] = useState([]);
	const handleArabicImage = (event) => {
		SetArabicImage(event.target.value);
	};

	const content = [
		{
			title: t('English Title:'),
			Titlelabel: t('English Title:'),
			Titlevalue: EnglishTitle,
			Titleonchange: handleEnglishTitle,
			Discription: t('English Discription:'),
			Discriptionlabel: t('English Discription:'),
			Discriptionvalue: EnglishDiscription,
			Discriptionchange: handleEnglishDiscription,
			imageTitle: t('Upload Image'),
			imageValue: EnglishImage,
			imageonChange: handleEnglishImage,
		},
		{
			title: t('Arabic Title:'),
			Titlelabel: t('Arabic Title:'),
			Titlevalue: ArabicTitle,
			Titleonchange: handleArabicTitle,

			Discription: t('Arabic Discription:'),
			Discriptionlabel: t('Arabic Discription:'),
			Discriptionvalue: ArabicDiscription,
			Discriptionchange: handleArabicDiscription,

			imageTitle: t('Upload Image'),
			imageValue: ArabicImage,
			imageonChange: handleArabicImage,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing First Section')}</Typography>
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

									<Typography>{item.Discription}</Typography>
									<TextField
										required
										label={item.Discriptionlabel}
										value={item.Discriptionvalue}
										onChange={item.Discriptionchange}
										variant="outlined"
										fullWidth
									/>
									<Typography variant="h6">{item.imageTitle}</Typography>
									<label htmlFor="contained-button-file">
										<Input accept="image/*" multiple type="file" value={item.imageValue} onChange={item.imageonChange} />
									</label>
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
