import { Button, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EditMember() {
	const [news, setNews] = useState('');
	const handleChange = (event) => {
		setNews(event.target.value);
	};

	const [username, SetUsername] = useState('');

	const handleUserName = (event) => {
		SetUsername(event.target.value);
	};
	const [userEmail, SetUserEmail] = useState('');
	const handleUserEmail = (event) => {
		SetUserEmail(event.target.value);
	};
	return (
		<Grid container spacing={2} mt={2}>
			<Grid item xs={12}>
				<Stack direction="column" spacing={2}>
					<Typography variant="h6">Enter The Member Name:</Typography>
					<TextField required id="standard-Name" label="Enter Member name" value={username} onChange={handleUserName} variant="outlined" fullWidth />
					<Typography variant="h6">Enter The Member Email:</Typography>
					<TextField
						required
						id="Standerd-Email"
						label="Enter Member Email"
						value={userEmail}
						onChange={handleUserEmail}
						variant="outlined"
						fullWidth
					/>

					<Typography variant="h6">Member Discription:</Typography>
					<TextareaAutosize aria-label="minimum height" minRows={5} placeholder="Discription" />

					<label htmlFor="contained-button-file">
						<Input accept="image/*" id="contained-button-file" multiple type="file" />
					</label>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained" component="span">
					update
				</Button>
			</Grid>
		</Grid>
	);
}
