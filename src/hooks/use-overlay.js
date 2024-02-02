import { useContext } from "react";

import { OverlayContext } from "../contexts/overlay";

export const useOverlay = () => {
	const { onOpenOverlay } = useContext(OverlayContext);

	if (onOpenOverlay === (() => {})) {
		throw new Error("OverlayContext.Provider 사용을 확인해야합니다.");
	}

	return { onOpenOverlay };
};
