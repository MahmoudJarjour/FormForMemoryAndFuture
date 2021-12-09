import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { LoadingButton } from '@mui/lab';

export default function EditContactUs({ isLoading, defaultValue, onSubmit }) {
	const { t } = useTranslation();

	const [section, setSection] = useState(defaultValue);

	const content = [
		{
			key: 'en',
			title: t('English Title:'),
			titleLabel: t('English Title:'),
			Address: t('English Address:'),
			addressLabel: t('English Address:'),
			subtitle1Label: t('English subtitle 1'),
			Description1: t('English Description:'),
			PhoneNumberLabel: t('Phone Number'),
			EmailLabel: t('Email'),
			subtitle2Label: t('English Subtitle 2'),
		},
		{
			key: 'ar',
			title: t('Arabic Title:'),
			titleLabel: t('Arabic Title:'),
			Address: t('Arabic Address:'),
			addressLabel: t('Arabic Address:'),
			subtitle1Label: t('Arabic subtitle 1'),
			Description1: t('Arabic Description:'),
			PhoneNumberLabel: t('Phone Number'),
			EmailLabel: t('Email'),
			subtitle2Label: t('Arabic Subtitle 2'),
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
							<Grid key={item.key} item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									{/* {Title} */}
									<Typography>{item.title}</Typography>
									<TextField
										label={item.titleLabel}
										value={section[item.key].title}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], title: value } })}
										variant="outlined"
										fullWidth
									/>
									{/* {Address} */}
									<Typography>{item.Address}</Typography>
									<TextField
										label={item.addressLabel}
										value={section[item.key].address}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], address: value } })}
										variant="outlined"
										fullWidth
									/>
									{/* {Subtitle 1} */}
									<Typography>{item.subtitle1Label}</Typography>
									<TextField
										label={item.subtitle1Label}
										value={section[item.key].openingDays}
										onChange={({ target: { value } }) =>
											setSection({ ...section, [item.key]: { ...section[item.key], openingDays: value } })
										}
										variant="outlined"
										fullWidth
									/>

									{/* {subtitle 1 description} */}
									<Typography>{item.Description1}</Typography>
									<TextField
										placeholder={item.Description1}
										value={section[item.key].openingHours}
										onChange={({ target: { value } }) =>
											setSection({ ...section, [item.key]: { ...section[item.key], openingHours: value } })
										}
										variant="outlined"
										fullWidth
									/>
									{/* {Subtitle 2 } */}
									<Typography>{item.subtitle2Label}</Typography>
									<TextField label={item.subtitle2Label} variant="outlined" fullWidth />
									{/* {Phone Number} */}
									<Typography>{item.PhoneNumberLabel}</Typography>
									<TextField
										label={item.PhoneNumberLabel}
										value={section[item.key].phone}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], phone: value } })}
										variant="outlined"
										fullWidth
									/>
									{/* {Email} */}
									<Typography>{item.EmailLabel}</Typography>
									<TextField
										label={item.EmailLabel}
										variant="outlined"
										value={section[item.key].email}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], email: value } })}
										fullWidth
									/>
								</Stack>
							</Grid>
						))}
						<Grid item xs={12}>
							<LoadingButton variant="outlined" loading={isLoading} onClick={() => onSubmit({ contact: section })}>
								{t('Submit')}
							</LoadingButton>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
