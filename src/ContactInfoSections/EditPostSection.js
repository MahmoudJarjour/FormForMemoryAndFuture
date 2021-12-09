import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditPostsSection({ defaultValue, onSubmit, isLoading }) {
	const { t } = useTranslation();

	const [section, setSection] = useState(defaultValue);

	const content = [
		{
			key: 'en',
			title: t('English Title:'),
			titleLabel: t('English Title:'),
			description: t('English Description:'),
			descriptionLabel: t('English Description:'),
		},
		{
			key: 'ar',
			title: t('Arabic Title:'),
			titleLabel: t('Arabic Title:'),
			description: t('Arabic Description:'),
			descriptionLabel: t('Arabic Description:'),
		},
	];

	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing Posts Section')}</Typography>
						</Grid>
						{content.map((item) => (
							<Grid key={item.key} item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									<Typography>{item.title}</Typography>
									<TextField
										label={item.titleLabel}
										value={section[item.key].title}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { title: value } })}
										variant="outlined"
										fullWidth
									/>

									<Typography>{item.description}</Typography>
									<TextField
										label={item.descriptionLabel}
										value={section[item.key].description}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { description: value } })}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
						))}
						<Grid item xs={12}>
							<LoadingButton variant="outlined" onClick={() => onSubmit({ posts: section })}>
								{t('Submit')}
							</LoadingButton>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
