import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};
const Popup = (props) => {
	const { t } = useTranslation();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleOpen}>Read More</Button>
			<Modal hideBackdrop open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
				<Box sx={{ ...style, width: 200 }}>
					{props.children}
					<Button onClick={handleClose}>Close</Button>
				</Box>
			</Modal>
		</>
	);
};

export default Popup;
