import { Card, Grid, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import CreatePost from '../EditPostsSection/CreatePost';
import ViewPosts from '../EditPostsSection/ViewPosts';
import UpdatePosts from '../EditPostsSection/UpdatePosts';
import { useTranslation } from 'react-i18next';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
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
	const { t } = useTranslation();
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} mt={2}>
				<Card>
					<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
						<Tab label={t('Create Post')} icon={<AddCircleOutlineOutlinedIcon />} value={0} />
						<Tab label={t('Update Post')} icon={<ModelTrainingOutlinedIcon />} value={1} />
						<Tab label={t('View Posts')} icon={<GridViewOutlinedIcon />} value={2} />
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
				<ViewPosts />
			</TabPanel>
		</Grid>
	);
}
