import { Button, Card, CardContent, Grid, Input, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CreatePost from '../EditPostsSection/CreatePost';
import ViewPosts from '../EditPostsSection/ViewPosts';
import UpdatePosts from '../EditPostsSection/UpdatePosts';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		value === index && (
			<Grid item xs={12}>
				{children}
			</Grid>
		)
	);
}

export default function EditPosts() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} mt={2}>
					<Card>
						<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
							<Tab label="Create Post" value={0} />
							<Tab label="Edit Post" value={1} />
							<Tab label="Delete Post" value={2} />
							<Tab label="View Posts" value={3} />
						</Tabs>
					</Card>
				</Grid>

				<TabPanel value={value} index={0}>
					<CreatePost />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<UpdatePosts />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Delete Posts
				</TabPanel>
				<TabPanel value={value} index={3}>
					<ViewPosts />
				</TabPanel>
			</Grid>
		</>
	);
}
