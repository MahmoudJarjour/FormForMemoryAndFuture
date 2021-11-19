import { Button, Card, CardContent, Grid, Input, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function EditMember() {
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
	);
}
