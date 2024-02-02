import { createContext, useRef, useState } from "react";

import { OverlayBase } from "../components/overlay";

export const OverlayContext = createContext({
	onOpenOverlay: () => {},
});

export const OverlayProvider = ({ children }) => {
	/** 오버레이 컴포넌트 */
	const OverlayComponent = useRef(null);
	/** 오베레이 컴포넌트 생성 위치 */
	const overlayPosition = useRef(null);
	/** 오버레이 컴포넌트 에 전달할 props */
	const [overlayComponentsProps, setOverlayComponentsProps] = useState({});

	/**
	 * @function
	 * @parameter overlayComponent : JSX.Element - 열고 싶은 오버레이 컴포넌트
	 * @parameter overlayPosition : "topLeft" | "topCenter" | "topLeft" | "midLeft" | "midCenter" | "midRight" | "bottomLeft" | "bottomCenter" | "bottomRight" - 오버레이 컴포넌트 위치
	 * @parameter props : object - 오버레이 컴포넌트에 전달할 props
	 *
	 * @description
	 * 오버레이 컴포넌트가 등록될 경우, 해당 컴포넌트가 열립니다.
	 */
	const onOpenOverlay = ({ overlayComponent, position, ...props }) => {
		OverlayComponent.current = overlayComponent;
		overlayPosition.current = position;
		/** 오버레이 컴포넌트 전달없이는 상태를 변화시킬 수 없습니다. */
		if (
			OverlayComponent.current &&
			typeof OverlayComponent.current === "function"
		) {
			setOverlayComponentsProps(() => ({ ...props }));
		}
	};

	/**
	 * @function
	 *
	 * @description
	 * 등록된 오버레이 컴포넌트를 해제합니다.
	 */
	const onClose = () => {
		OverlayComponent.current = null;
		overlayPosition.current = null;
		setOverlayComponentsProps(() => ({}));
	};

	return (
		<OverlayContext.Provider value={{ onOpenOverlay }}>
			{children}

			{OverlayComponent.current && (
				<OverlayBase position={overlayPosition.current}>
					<OverlayComponent.current
						{...overlayComponentsProps}
						onClose={onClose}
					/>
				</OverlayBase>
			)}
		</OverlayContext.Provider>
	);
};
