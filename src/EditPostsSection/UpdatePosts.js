import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Card, CardContent, Input, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export default function UpdatePosts() {
	const [title, SetTitle] = useState('');
	const handleTitle = (event) => {
		SetTitle(event.target.value);
	};

	const [Description, SetDescription] = useState('');
	const handleDescription = (event) => {
		SetDescription(event.target.value);
	};

	const { t } = useTranslation();
	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item sx={12} md={12}>
				<Card variant="none">
					<CardContent>
						<Search>
							<SearchIconWrapper>
								<SearchIcon color="inherit" />
							</SearchIconWrapper>
							<StyledInputBase placeholder={t('Search for Post...')} inputProps={{ 'aria-label': 'search' }} />
						</Search>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card variant="none">
					<CardContent>
						<Grid container spacing={2} mt={2}>
							<Grid item xs={12}>
								<Stack direction="column" spacing={2}>
									<Typography variant="h6">{t('Title')}</Typography>
									<TextField required label={t('Enter Post Title')} value={title} onChange={handleTitle} variant="outlined" fullWidth />

									<Typography variant="h6">{t('Description')}</Typography>
									<TextareaAutosize
										aria-label="minimum height"
										minRows={5}
										placeholder={t('Description')}
										value={Description}
										onChange={handleDescription}
									/>

									<label htmlFor="contained-button-file">
										<Input accept="image/*" id="contained-button-file" multiple type="file" />
									</label>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" component="span">
									{t('Update')}
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
