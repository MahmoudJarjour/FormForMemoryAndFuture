import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EditContactUs() {
	const { t } = useTranslation();

	const [EnglishTitle, SetEnglishTitle] = useState('');
	const handleEnglishTitle = (event) => {
		SetEnglishTitle(event.target.value);
	};

	const [EnglishAddress, SetEnglishAddress] = useState('');
	const handleEnglishAddress = (event) => {
		SetEnglishAddress(event.target.value);
	};

	const [ArabicTitle, SetArabicTitle] = useState('');
	const handleArabicTitle = (event) => {
		SetArabicTitle(event.target.value);
	};

	const [ArabicAddress, SetArabicAddress] = useState('');
	const handleArabicAddress = (event) => {
		SetArabicAddress(event.target.value);
	};

	const [Englishsubtitle1, SetEnglishsubtitle1] = useState('');
	const handleEnglishsubtitle1 = (event) => {
		SetEnglishsubtitle1(event.target.value);
	};

	const [EnglishDiscription1, SetEnglishDiscription1] = useState('');
	const handleEnglishDiscription1 = (event) => {
		SetEnglishDiscription1(event.target.value);
	};

	const [EnglishPhoneNumber, SetEnglishPhoneNumber] = useState('');
	const handleEnglishPhoneNumber = (event) => {
		SetEnglishPhoneNumber(event.target.value);
	};

	const [ArabicPhoneNumber, SetArabicPhoneNumber] = useState('');
	const handleArabicPhoneNumber = (event) => {
		SetArabicPhoneNumber(event.target.value);
	};

	const [EnglishSubtitle2, SetEnglishSubtitle2] = useState('');
	const handleEnglishSubtitle2 = (event) => {
		SetEnglishSubtitle2(event.target.value);
	};

	const [Arabicsubtitle1, SetArabicsubtitle1] = useState('');
	const handleArabicsubtitle1 = (event) => {
		SetArabicsubtitle1(event.target.value);
	};

	const [ArabicDiscription1, SetArabicDiscription1] = useState('');
	const handleArabicDiscription1 = (event) => {
		SetArabicDiscription1(event.target.value);
	};

	const [ArabicSubtitle2, SetArabicSubtitle2] = useState('');
	const handleArabicSubtitle2 = (event) => {
		SetArabicSubtitle2(event.target.value);
	};

	const [ArabicEmail, SetArabicEmail] = useState('');
	const handleArabicEmail = (event) => {
		SetArabicEmail(event.target.value);
	};

	const [EnglishEmail, SetEnglishEmail] = useState('');
	const handleEnglishEmail = (event) => {
		SetEnglishEmail(event.target.value);
	};

	const content = [
		{
			title: t('English Title:'),
			Titlelabel: t('English Title:'),
			Titlevalue: EnglishTitle,
			Titleonchange: handleEnglishTitle,

			Address: t('English Address:'),
			Addresslabel: t('English Address:'),
			Addressvalue: EnglishAddress,
			Addresschange: handleEnglishAddress,

			subtitle1Label: t('English subtitle 1'),
			subtitle1value: Englishsubtitle1,
			subtitle1onchange: handleEnglishsubtitle1,

			Discription1: t('English Discription:'),
			Discription1value: EnglishDiscription1,
			Discription1onchange: handleEnglishDiscription1,

			PhoneNumberLabel: t('Phone Number'),
			PhoneNumberValue: EnglishPhoneNumber,
			PhoneNumberonchange: handleEnglishPhoneNumber,

			EmailLabel: t('Email'),
			Emailvalue: EnglishEmail,
			Emailonchange: handleEnglishEmail,

			subtitle2Label: t('English Subtitle 2'),
			subtitle2value: EnglishSubtitle2,
			subtitle2onchange: handleEnglishSubtitle2,
		},
		{
			title: t('Arabic Title:'),
			Titlelabel: t('Arabic Title:'),
			Titlevalue: ArabicTitle,
			Titleonchange: handleArabicTitle,
			Address: t('Arabic Address:'),
			Addresslabel: t('Arabic Address:'),
			Addressvalue: ArabicAddress,
			Addresschange: handleArabicAddress,

			subtitle1Label: t('Arabic subtitle 1'),
			subtitle1value: Arabicsubtitle1,
			subtitle1onchange: handleArabicsubtitle1,

			Discription1: t('Arabic Discription:'),
			Discription1value: ArabicDiscription1,
			Discription1onchange: handleArabicDiscription1,

			PhoneNumberLabel: t('Phone Number'),
			PhoneNumberValue: ArabicPhoneNumber,
			PhoneNumberonchange: handleArabicPhoneNumber,

			EmailLabel: t('Email'),
			Emailvalue: ArabicEmail,
			Emailonchange: handleArabicEmail,

			subtitle2Label: t('Arabic Subtitle 2'),
			subtitle2value: ArabicSubtitle2,
			subtitle2onchange: handleArabicSubtitle2,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing Contact US Section')}</Typography>
						</Grid>
						{content.map((item) => (
							<Grid item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									{/* {Title} */}
									<Typography>{item.title}</Typography>
									<TextField
										required
										label={item.Titlelabel}
										value={item.Titlevalue}
										onChange={item.Titleonchange}
										variant="outlined"
										fullWidth
									/>
									{/* {Address} */}
									<Typography>{item.Address}</Typography>
									<TextField
										required
										label={item.Addresslabel}
										value={item.Addressvalue}
										onChange={item.Addresschange}
										variant="outlined"
										fullWidth
									/>

									{/* {Subtitle 1} */}
									<Typography>{item.subtitle1Label}</Typography>
									<TextField
										required
										label={item.subtitle1Label}
										value={item.subtitle1value}
										onChange={item.subtitle1onchange}
										variant="outlined"
										fullWidth
									/>
									{/* {subtitle 1 discription} */}
									<Typography>{item.Discription1}</Typography>
									<TextareaAutosize
										required
										minRows={5}
										placeholder={item.Discription1}
										value={item.Discription1value}
										onChange={item.Discription1onchange}
										variant="outlined"
										fullWidth
									/>

									{/* {Subtitle 2 } */}

									<Typography>{item.subtitle2Label}</Typography>
									<TextField
										required
										label={item.subtitle2Label}
										value={item.subtitle2value}
										onChange={item.subtitle2onchange}
										variant="outlined"
										fullWidth
									/>
									{/* {Phone Number} */}
									<Typography>{item.PhoneNumberLabel}</Typography>
									<TextField
										required
										label={item.PhoneNumberLabel}
										value={item.PhoneNumberValue}
										onChange={item.PhoneNumberonchange}
										variant="outlined"
										fullWidth
									/>
									{/* {Email} */}
									<Typography>{item.EmailLabel}</Typography>
									<TextField
										required
										label={item.EmailLabel}
										value={item.Emailvalue}
										onChange={item.Emailonchange}
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
