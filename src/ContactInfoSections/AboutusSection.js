import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutUsSection() {
	const { t } = useTranslation();
	const [EnglishTitle, SetEnglishTitle] = useState('');
	const handleEnglishTitle = (event) => {
		SetEnglishTitle(event.target.value);
	};

	const [EnglishDescription, SetEnglishDescription] = useState('');
	const handleEnglishDescription = (event) => {
		SetEnglishDescription(event.target.value);
	};

	const [ArabicTitle, SetArabicTitle] = useState('');
	const handleArabicTitle = (event) => {
		SetArabicTitle(event.target.value);
	};

	const [ArabicDescription, SetArabicDescription] = useState('');
	const handleArabicDescription = (event) => {
		SetArabicDescription(event.target.value);
	};

	const [EnglishBlockTitle, SetEnglishBlockTitle] = useState('');
	const handleEnglishBlockTitle = (event) => {
		SetEnglishBlockTitle(event.target.value);
	};

	const [EnglishBlockDescription, SetEnglishBlockDescription] = useState('');
	const handleEnglishBlockDescription = (event) => {
		SetEnglishBlockDescription(event.target.value);
	};

	const [ArabicBlockTitle, SetArabicBlockTitle] = useState('');
	const handleArabicBlockTitle = (event) => {
		SetArabicBlockTitle(event.target.value);
	};

	const [ArabicBlockDescription, SetArabicBlockDescription] = useState('');
	const handleArabicBlockDescription = (event) => {
		SetArabicBlockDescription(event.target.value);
	};

	const [EnglishImage, SetEnglishImage] = useState([]);
	const handleEnglishImage = (event) => {
		SetEnglishImage(event.target.value);
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

			Description: t('English Description:'),
			Descriptionlabel: t('English Description:'),
			Descriptionvalue: EnglishDescription,
			Descriptionchange: handleEnglishDescription,

			imageTitle: t('Upload Image'),
			imageValue: EnglishImage,
			imageonChange: handleEnglishImage,

			BlockTitle: t('English Block Title'),
			BlockTitlelabel: t('English Block Title'),

			BlockTitlevalue: EnglishBlockTitle,
			BlockTitleonchange: handleEnglishBlockTitle,

			BlockDescription: t('English Block Description'),
			BlockDescriptionlabel: t('English Block Description'),
			BlockDescriptionvalue: EnglishBlockDescription,
			BlockDescriptionchange: handleEnglishBlockDescription,
		},
		{
			title: t('Arabic Title:'),
			Titlelabel: t('Arabic Title:'),
			Titlevalue: ArabicTitle,
			Titleonchange: handleArabicTitle,

			Description: t('Arabic Description:'),
			Descriptionlabel: t('Arabic Description:'),
			Descriptionvalue: ArabicDescription,
			Descriptionchange: handleArabicDescription,

			imageTitle: t('Upload Image'),
			imageValue: ArabicImage,
			imageonChange: handleArabicImage,

			BlockTitle: t('Arabic Block Title'),
			BlockTitlelabel: t('Arabic Block Title'),

			BlockTitlevalue: ArabicBlockTitle,
			BlockTitleonchange: handleArabicBlockTitle,

			BlockDescription: t('Arabic Block Description:'),
			BlockDescriptionlabel: t('Arabic Block Description:'),
			BlockDescriptionvalue: ArabicBlockDescription,
			BlockDescriptionchange: handleArabicBlockDescription,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing About Us Section')}</Typography>
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

									<Typography>{item.Description}</Typography>
									<TextField
										required
										label={item.Descriptionlabel}
										value={item.Descriptionvalue}
										onChange={item.Descriptionchange}
										variant="outlined"
										fullWidth
									/>
									<Typography variant="h6">{item.imageTitle}</Typography>
									<label htmlFor="contained-button-file">
										<Input accept="image/*" multiple type="file" value={item.imageValue} onChange={item.imageonChange} />
									</label>

									<Typography>{item.BlockTitle}</Typography>
									<TextField
										required
										label={item.BlockTitlelabel}
										value={item.BlockTitlevalue}
										onChange={item.BlockTitleonchange}
										variant="outlined"
										fullWidth
									/>

									<Typography>{item.BlockDescription}</Typography>
									<TextField
										required
										label={item.BlockDescriptionlabel}
										value={item.BlockDescriptionvalue}
										onChange={item.BlockDescriptionchange}
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
