import { createContext, useRef, useState } from "react";

import { OverlayBase } from "../components/overlay";

export const OverlayContext = createContext({
	onOpenOverlay: () => {},
});

export const OverlayProvider = ({ children }) => {
	/** 오버레이 컴포넌트 */
	const OverlayComponent = useRef(null);
	/** OverlayBase 에 전달될 props  */
	const overlayBaseProps = useRef(null);
	/** 오버레이 컴포넌트 에 전달할 props */
	const [overlayComponentsProps, setOverlayComponentsProps] = useState({});

	/**
	 * @function
	 * @parameter overlayComponent : JSX.Element - 열고 싶은 오버레이 컴포넌트
	 * @parameter position : "topLeft" | "topCenter" | "topLeft" | "midLeft" | "midCenter" | "midRight" | "bottomLeft" | "bottomCenter" | "bottomRight" - 오버레이 컴포넌트 위치
	 * @parameter isFiltered : boolean - 뒷 배경을 어둡게 할 필터를 적용할지 여부
	 * @parameter props : object - 오버레이 컴포넌트에 전달할 props
	 * @parameter zIndex : number - 오버레이 컴포넌트 간의 z-index 상대값 (0 보다 큰 값)
	 *
	 * @description
	 * 오버레이 컴포넌트가 등록될 경우, 해당 컴포넌트가 열립니다.
	 */
	const onOpenOverlay = ({
		overlayComponent,
		position,
		isFiltered,
		zIndex,
		...props
	}) => {
		OverlayComponent.current = overlayComponent;
		overlayBaseProps.current = { position, isFiltered, zIndex };
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
		overlayBaseProps.current = null;
		setOverlayComponentsProps(() => ({}));
	};

	return (
		<OverlayContext.Provider value={{ onOpenOverlay }}>
			{children}

			{OverlayComponent.current && (
				<OverlayBase {...overlayBaseProps.current}>
					<OverlayComponent.current
						{...overlayComponentsProps}
						onClose={onClose}
					/>
				</OverlayBase>
			)}
		</OverlayContext.Provider>
	);
};
