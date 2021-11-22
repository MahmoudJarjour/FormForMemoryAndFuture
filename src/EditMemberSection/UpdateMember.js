import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Card, CardContent, Input, Stack, TextField, Typography } from '@mui/material';

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

export default function UpdateMember() {
	const [username, SetUsername] = useState('');

	const handleUserName = (event) => {
		SetUsername(event.target.value);
	};
	const [Discription, SetDiscription] = useState('');
	const handleDiscription = (event) => {
		SetDiscription(event.target.value);
	};

	const [userEmail, SetUserEmail] = useState('');
	const handleUserEmail = (event) => {
		SetUserEmail(event.target.value);
	};

	return (
		<Grid container spacing={2}>
			<Grid item sx={12} md={12}>
				<Card variant="none">
					<CardContent>
						<Search>
							<SearchIconWrapper>
								<SearchIcon color="inherit" />
							</SearchIconWrapper>
							<StyledInputBase placeholder="Search for Post..." inputProps={{ 'aria-label': 'search' }} />
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
									<Typography variant="h6">Member Name:</Typography>
									<TextField required label="Enter Member name" value={username} onChange={handleUserName} variant="outlined" fullWidth />
									<Typography variant="h6">Member Email:</Typography>
									<TextField required label="Enter Member Email" value={userEmail} onChange={handleUserEmail} variant="outlined" fullWidth />

									<Typography variant="h6">Member Discription:</Typography>
									<TextareaAutosize
										aria-label="minimum height"
										minRows={5}
										placeholder="Discription"
										value={Discription}
										onChange={handleDiscription}
									/>

									<Grid container justifyContent="center" alignItems="center">
										<Grid item xs={12} md={6}>
											<label htmlFor="contained-button-file">
												<Input accept="image/*" id="contained-button-file" multiple type="file" />
											</label>
										</Grid>
										<Grid item xs={12} md={6}>
											<img src="3.png" style={{ width: '100%' }} />
										</Grid>
									</Grid>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Button variant="contained" component="span">
									update
								</Button>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
