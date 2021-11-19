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

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';

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
	const { t } = useTranslation();
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} mt={2}>
				<Card>
					<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
						<Tab label={t('First Section')} icon={<PageviewOutlinedIcon />} value={0} />

						<Tab label={t('Members')} icon={<GroupOutlinedIcon />} value={1} />
						<Tab label={t('AboutUs')} icon={<InfoOutlinedIcon />} value={2} />
						<Tab label={t('POSTS')} icon={<ModeEditOutlineOutlinedIcon />} value={3} />
						<Tab label={t('Membership')} icon={<LoyaltyOutlinedIcon />} value={4} />
						<Tab label={t('Contact us')} icon={<ContactMailOutlinedIcon />} value={5} />
						<Tab label={t('Social Icons')} icon={<PermMediaOutlinedIcon />} value={6} />
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
