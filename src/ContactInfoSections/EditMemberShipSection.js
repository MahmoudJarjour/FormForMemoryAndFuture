import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditMemberShipSection({ defaultValue, isLoading, onSubmit }) {
	const { t } = useTranslation();

	const [section, setSection] = useState(defaultValue);

	const content = [
		{
			key: 'en',
			title: t('English Title:'),
			titleLabel: t('English Title:'),
			description: t('English Description:'),
			descriptionLabel: t('English Description:'),
			name: t('English Name'),
			nameLabel: t('English Name'),
			newsLabel: t('Item in English'),
		},
		{
			key: 'ar',
			title: t('Arabic Title:'),
			titleLabel: t('Arabic Title:'),
			description: t('Arabic Description:'),
			descriptionLabel: t('Arabic Description:'),
			name: t('Arabic Name'),
			nameLabel: t('Arabic Name'),
			newsLabel: t('Item in Arabic'),
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
							<Grid key={item.key} item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									<Typography>{item.title}</Typography>
									<TextField
										required
										label={item.titleLabel}
										value={section[item.key].title}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], title: value } })}
										variant="outlined"
										fullWidth
									/>

									<Typography>{item.description}</Typography>
									<TextField
										required
										label={item.descriptionLabel}
										value={section[item.key].description}
										onChange={({ target: { value } }) =>
											setSection({ ...section, [item.key]: { ...section[item.key], description: value } })
										}
										variant="outlined"
										fullWidth
									/>
									<Typography>{item.name}</Typography>
									<TextField
										required
										label={item.nameLabel}
										value={section[item.key].name}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], name: value } })}
										variant="outlined"
										fullWidth
									/>
									<Typography>{item.email}</Typography>
									<TextField
										required
										label={item.emailLabel}
										value={section[item.key].email}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], email: value } })}
										variant="outlined"
										fullWidth
									/>
									<Typography>{item.newsLabel}</Typography>
									<TextField
										required
										label={item.newsLabel}
										value={section[item.key].type}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { ...section[item.key], type: value } })}
										variant="outlined"
										fullWidth
									/>
									<Typography>{item.options}</Typography>
									<TextField
										required
										label={item.optionsLabel}
										value={section[item.key].types.join(item.key === 'en' ? ',' : '،')}
										onChange={({ target: { value } }) =>
											setSection({ ...section, [item.key]: { ...section[item.key], types: value.split(',') } })
										}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
						))}
						<Grid item xs={12}>
							<LoadingButton loading={isLoading} variant="outlined" onClick={() => onSubmit({ membership: section })}>
								{t('Submit')}
							</LoadingButton>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
