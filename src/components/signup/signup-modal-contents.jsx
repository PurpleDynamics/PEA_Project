// export const OpenOverlay = ({ modalContent, bool }) => {
// 	const { onOpenOverlay } = useOverlay();

// 	onOpenOverlay({
// 		overlayComponent: Modal,
// 		modalContents: modalContent,
// 		isFiltered: bool,
// 	});

// 	return null;
// };

export const ModalContent = ({ text }) => {
	return <div>{text}</div>;
};
