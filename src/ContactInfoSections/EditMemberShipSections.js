import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditMemberShipSections() {
	const { t } = useTranslation();

	const [EnglishTitle, SetEnglishTitle] = useState('');
	const handleEnglishTitle = (event) => {
		SetEnglishTitle(event.target.value);
	};

	const [EnglishDiscription, SetEnglishDiscription] = useState('');
	const handleEnglishDiscription = (event) => {
		SetEnglishDiscription(event.target.value);
	};

	const [EnglishNews, SetEnglishNews] = useState('');
	const handleEnglishNews = (event) => {
		SetEnglishNews(event.target.value);
	};
	const [ArabicTitle, SetArabicTitle] = useState('');
	const handleArabicTitle = (event) => {
		SetArabicTitle(event.target.value);
	};

	const [ArabicDiscription, SetArabicDiscription] = useState('');
	const handleArabicDiscription = (event) => {
		SetArabicDiscription(event.target.value);
	};

	const [ArabicNews, SetArabicNews] = useState('');
	const handleArabicNews = (event) => {
		SetArabicNews(event.target.value);
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
			newslabel: t('Item in English'),
			newsName: EnglishNews,
			newsOnchange: handleEnglishNews,
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
			newslabel: t('Item in Arabic'),
			newsName: ArabicNews,
			newsOnchange: handleArabicNews,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing Membership section')}</Typography>
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
									<Typography>{item.newslabel}</Typography>
									<TextField
										required
										label={item.newslabel}
										value={item.newsName}
										onChange={item.newsOnchange}
										variant="outlined"
										fullWidth
									/>
									<Grid container spacing={2} justifyContent="space-between">
										<Grid item xs={12} md={6}>
											<Button variant="outlined" color="secondary">
												{t('Add Item to list')}
											</Button>
										</Grid>
										<Grid item xs={12} md={6}>
											<Button variant="outlined" color="info">
												{t('Remove Item from list')}
											</Button>
										</Grid>
									</Grid>
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
