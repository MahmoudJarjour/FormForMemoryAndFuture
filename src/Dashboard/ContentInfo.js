import { Card, CardContent, Divider, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditFirstSection from '../ContactInfoSections/EditFirstSection';
import EditMembersSection from '../ContactInfoSections/EditMembersSection';
import AboutusSection from '../ContactInfoSections/AboutusSection';
import EditPostSection from '../ContactInfoSections/EditPostSection';
import { useTranslation } from 'react-i18next';
import EditMemberShipSections from '../ContactInfoSections/EditMemberShipSections';
import EditContactUs from '../ContactInfoSections/EditContactUs';
import EditSocialIcons from '../ContactInfoSections/EditSocialIcons';

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
export default function ContentInfo() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} mt={2}>
				<Card>
					<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
						<Tab label="First Section" value={0} />
						<Tab label="Members" value={1} />
						<Tab label="About Us" value={2} />
						<Tab label="Posts" value={3} />
						<Tab label="MemberShip" value={4} />
						<Tab label="Contact us" value={5} />
						<Tab label="Social Icons" value={6} />
					</Tabs>
				</Card>
			</Grid>

			<TabPanel value={value} index={0}>
				<EditFirstSection />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<EditMembersSection />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<AboutusSection />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<EditPostSection />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<EditMemberShipSections />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<EditContactUs />
			</TabPanel>
			<TabPanel value={value} index={6}>
				<EditSocialIcons />
			</TabPanel>
		</Grid>
	);
}
