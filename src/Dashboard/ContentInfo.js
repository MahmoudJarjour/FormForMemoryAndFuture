import { Card, Grid, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditFirstSection from '../ContactInfoSections/EditFirstSection';
import EditMembersSection from '../ContactInfoSections/EditMembersSection';
import AboutUsSection from '../ContactInfoSections/AboutUsSection';
import EditPostSection from '../ContactInfoSections/EditPostSection';
import { useTranslation } from 'react-i18next';
import EditMemberShipSection from '../ContactInfoSections/EditMemberShipSection';
import EditContactUs from '../ContactInfoSections/EditContactUs';
import EditSocialIcons from '../ContactInfoSections/EditSocialIcons';

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PageViewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { db } from '../firebase';

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
export default function ContentInfo() {
	const [value, setValue] = useState(0);
	const [info, setInfo] = useState({});
	const [isLoading, setIsLoading] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const { t } = useTranslation();

	const onEdit = async (data) => {
		setIsLoading(true);
		await setDoc(doc(db, 'info', 'website'), data, { merge: true });
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(true);
		getDoc(doc(db, 'info', 'website')).then((snap) => {
			setInfo(snap.data());
		});
		setIsLoading(false);
	}, []);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} mt={2}>
				<Card>
					<Tabs value={value} variant="scrollable" scrollButtons="auto" onChange={handleChange}>
						<Tab label={t('First Section')} icon={<PageViewOutlinedIcon />} value={0} />
						<Tab label={t('Second Section')} icon={<GroupOutlinedIcon />} value={1} />
						<Tab label={t('Third Section')} icon={<InfoOutlinedIcon />} value={2} />
						<Tab label={t('POSTS')} icon={<ModeEditOutlineOutlinedIcon />} value={3} />
						<Tab label={t('Membership')} icon={<LoyaltyOutlinedIcon />} value={4} />
						<Tab label={t('Contact us')} icon={<ContactMailOutlinedIcon />} value={5} />
						<Tab label={t('Social Icons')} icon={<PermMediaOutlinedIcon />} value={6} />
					</Tabs>
				</Card>
			</Grid>

			<TabPanel value={value} index={0}>
				{info.header && <EditFirstSection onSubmit={onEdit} defaultValue={info.header} isLoading={isLoading} />}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{info.members && <EditMembersSection onSubmit={onEdit} defaultValue={info.members} isLoading={isLoading} />}
			</TabPanel>
			<TabPanel value={value} index={2}>
				<AboutUsSection />
			</TabPanel>
			<TabPanel value={value} index={3}>
				{info.posts && <EditPostSection onSubmit={onEdit} defaultValue={info.posts} isLoading={isLoading} />}
			</TabPanel>
			<TabPanel value={value} index={4}>
				{info.membership && <EditMemberShipSection onSubmit={onEdit} defaultValue={info.membership} isLoading={isLoading} />}
			</TabPanel>
			<TabPanel value={value} index={5}>
				{info.contact && <EditContactUs onSubmit={onEdit} defaultValue={info.contact} isLoading={isLoading} />}
			</TabPanel>
			<TabPanel value={value} index={6}>
				{info.footer && <EditSocialIcons onSubmit={onEdit} defaultValue={info.footer} isLoading={isLoading} />}
			</TabPanel>
		</Grid>
	);
}
