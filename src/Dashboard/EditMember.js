import { Card, Grid, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AddMember from '../EditMemberSection/AddMember';
import UpdateMember from '../EditMemberSection/UpdateMember';
import ViewMember from '../EditMemberSection/ViewMember';

function TabPanel(props) {
	const { children, value, index } = props;

	return (
		value === index && (
			<Grid item xs={12}>
				{children}
			</Grid>
		)
	);
}

export default function EditMember() {
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
						<Tab label={t('Add Member')} icon={<AddCircleOutlineOutlinedIcon />} value={0} />
						<Tab label={t('Update Member')} icon={<ModelTrainingOutlinedIcon />} value={1} />
						<Tab label={t('View Member')} icon={<GridViewOutlinedIcon />} value={2} />
					</Tabs>
				</Card>
			</Grid>

			<TabPanel value={value} index={0}>
				<AddMember />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<UpdateMember />
			</TabPanel>

			<TabPanel value={value} index={2}>
				<ViewMember />
			</TabPanel>
		</Grid>
	);
}
