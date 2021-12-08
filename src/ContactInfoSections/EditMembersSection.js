import { LoadingButton } from '@mui/lab';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EditMembersSection({ defaultValue, onSubmit, isLoading }) {
	const { t } = useTranslation();

	const [section, setSection] = useState(defaultValue);

	const content = [
		{
			key: 'en',
			title: t('English Title:'),
			titleLabel: t('English Title:'),
		},
		{
			key: 'ar',
			title: t('Arabic Title:'),
			titleLabel: t('Arabic Title:'),
		},
	];

	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">{t('Editing Members Section')}</Typography>
						</Grid>
						{content.map((item) => (
							<Grid key={item.key} item xs={12} md={6}>
								<Stack direction="column" spacing={2}>
									<Typography>{item.title}</Typography>
									<TextField
										required
										label={item.titleLabel}
										value={section[item.key].title}
										onChange={({ target: { value } }) => setSection({ ...section, [item.key]: { title: value } })}
										variant="outlined"
										fullWidth
									/>
								</Stack>
							</Grid>
						))}
						<Grid item xs={12}>
							<LoadingButton variant="outlined" onClick={() => onSubmit({ members: section })}>
								{t('Submit')}
							</LoadingButton>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}
