import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
	//================
	const [EnglishWorkHour, SetEnglishWorkHour] = useState('');
	const handleEnglishWorkHour = (event) => {
		SetEnglishWorkHour(event.target.value);
	};

	const [EnglishDays, SetEnglishDays] = useState('');
	const handleEnglishDays = (event) => {
		SetEnglishDays(event.target.value);
	};

	const [EnglishTime, SetEnglishTime] = useState('');
	const handleEnglishTime = (event) => {
		SetEnglishTime(event.target.value);
	};

	const [EnglishPhone, SetEnglishPhone] = useState('');
	const handleEnglishPhone = (event) => {
		SetEnglishPhone(event.target.value);
	};

	const [Englishcontact, SetEnglishcontact] = useState('');
	const handleEnglishcontact = (event) => {
		SetEnglishcontact(event.target.value);
	};

	const [ArabicWorkHour, SetArabicWorkHour] = useState('');
	const handleArabicWorkHour = (event) => {
		SetArabicWorkHour(event.target.value);
	};

	const [ArabicDays, SetArabicDays] = useState('');
	const handleArabicDays = (event) => {
		SetArabicDays(event.target.value);
	};

	const [ArabicTime, SetArabicTime] = useState('');
	const handleArabicTime = (event) => {
		SetArabicTime(event.target.value);
	};

	const [ArabicPhone, SetArabicPhone] = useState('');
	const handleArabicPhone = (event) => {
		SetArabicPhone(event.target.value);
	};

	const [Arabiccontact, SetArabiccontact] = useState('');
	const handleArabiccontact = (event) => {
		SetArabiccontact(event.target.value);
	};

	const [Email, SetEmail] = useState('');
	const handleEmail = (event) => {
		SetEmail(event.target.value);
	};

	const content = [
		{
			title: 'English Title:',
			Titlelabel: 'Enter English Title',
			Titlevalue: EnglishTitle,
			Titleonchange: handleEnglishTitle,
			Address: 'English Address:',
			Addresslabel: 'Enter English Address',
			Addressvalue: EnglishAddress,
			Addresschange: handleEnglishAddress,
			workHourLabel: 'Work Hour Title English',
			workHourvalue: EnglishWorkHour,
			workHouronchange: handleEnglishWorkHour,

			TimeLabel: 'Time English',
			Timevalue: EnglishTime,
			Timeonchange: handleEnglishTime,

			PhoneNumberLabel: 'Phone Number',
			PhoneNumberValue: EnglishPhone,
			PhoneNumberonchange: handleEnglishPhone,

			EmailLabel: 'Email',
			Emailvalue: Email,
			Emailonchange: handleEmail,

			contactLabel: 'Contact Info English',
			contactvalue: Englishcontact,
			contactonchange: handleEnglishcontact,
		},
		{
			title: 'Arabic Title:',
			Titlelabel: 'Enter Arabic Title',
			Titlevalue: ArabicTitle,
			Titleonchange: handleArabicTitle,
			Address: 'Arabic Address:',
			Addresslabel: 'Enter Arabic Address',
			Addressvalue: ArabicAddress,
			Addresschange: handleArabicAddress,

			workHourLabel: 'Work Hour Title English',
			workHourvalue: EnglishWorkHour,
			workHouronchange: handleEnglishWorkHour,

			TimeLabel: 'Time Arabic',
			Timevalue: ArabicTime,
			Timeonchange: handleArabicTime,
			PhoneNumberLabel: 'Phone Number',
			PhoneNumberValue: ArabicPhone,
			PhoneNumberonchange: handleArabicPhone,
			EmailLabel: 'Email',
			Emailvalue: Email,
			Emailonchange: handleEmail,
			contactLabel: 'Contact Info English',
			contactvalue: Arabiccontact,
			contactonchange: handleArabiccontact,
		},
	];
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">Editing Contact US Section</Typography>
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

									<Typography>{item.Address}</Typography>
									<TextField
										required
										label={item.Addresslabel}
										value={item.Addressvalue}
										onChange={item.Addresschange}
										variant="outlined"
										fullWidth
									/>

									<Typography>{item.workHourLabel}</Typography>
									<TextField
										required
										label={item.workHourLabel}
										value={item.workHourvalue}
										onChange={item.workHouronchange}
										variant="outlined"
										fullWidth
									/>

									{/* {Still have the discription text of the Opening Hour} */}
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
