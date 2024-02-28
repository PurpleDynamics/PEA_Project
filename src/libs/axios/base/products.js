import { axiosInstance } from ".";

/**
 * @function
 * @parameter title : string - 등록하는 상품의 title
 * @parameter price : number - 등록하는 상품의 가격
 * @parameter description : string - 등록하는 상품에 대한 설명
 * @parameter category : number - 등록하는 상품의 카테고리(0:중고 1:무료)
 * @parameter region : string - 등록하는 상품의 판매 위치 (ex. 서울 강남구 역삼동)
 * @parameter tag : string - 등록하는 상품의 태그 (["전자기기", "식물"])
 * @parameter images : file - 등록하는 상품의 이미지 ([0]: main [1~4] sub)
 * @description 상품 등록 API
 */
export const postProduct = async ({
	title,
	price,
	description,
	category,
	region,
	tag,
	images,
}) => {
	const response = await axiosInstance.post("/product", {
		title,
		price,
		description,
		category,
		region,
		tag,
		images,
	});
	return response.data;
};

/**
 * @function
 * @description 메인 상품 목록을 조회하는 API
 */
export const getProduct = async () => {
	const response = await axiosInstance.get("/product");
	return response.data;
};

/**
 * @function
 * @parameter category : number - 등록된 상품의 카테고리(0:중고 1:무료)
 * @parameter keyword : string - 키워드
 * @parameter page : number - 검색하려는 상품의 페이지
 * @description 등록 물품 검색을 위한 API
 */
export const getProductSearchByCategoryAndKeywordAndPage = async ({
	category,
	keyword,
	page,
}) => {
	const response = await axiosInstance.get("/product/search", {
		params: {
			category,
			keyword,
			page,
		},
	});
	return response.data;
};

/**
 * @function
 * @parameter prodIdx : number - 상세 정보를 조회하려는 상품의 index
 * @description prodIdx 해당하는 등록 상품의 상세 정보를 반환하는 API
 */
export const getProductDetailByProdIdx = async ({ prodIdx }) => {
	const response = await axiosInstance.get("/product/detail", {
		params: { prod_idx: prodIdx },
	});
	return response.data;
};

/**
 * @function
 * @description user의 관심 상픔을 등록/해제하는 API
 * - 요청결과
 * - 200 : { message: true, prod_idx : 2 } -- 관심상품 등록
 * - 200 : { message: false prod_idx : 2 } -- 관심상품 취소
 * - 400 : { message: failure }
 */
export const postProductLike = async () => {
	const response = await axiosInstance.post("/product/like");
	return response.data;
};

/**
 * @function
 * @parameter idx : string - 수정할 상품의 index
 * @parameter title : string - 수정할 상품의 title
 * @parameter price : number - 수정할 상품의 가격
 * @parameter description : string - 수정할 상품에 대한 설명
 * @parameter category : number - 수정할 상품의 카테고리(0:중고 1:무료)
 * @parameter region : string - 수정할 상품의 판매 위치 (ex. 서울 강남구 역삼동)
 * @parameter tag : string - 수정할 상품의 태그 (["전자기기", "식물"])
 * @parameter imgUrl : string - 서브 기존 이미지 url ([])
 * @parameter mainUrl : string - 메인 기존 이미지 url
 * @parameter images : file - 수정할 상품의 이미지 (main_url이 있다면 [0]~[3]sub, main_url이 없다면 [0]main, [1~3]sub)
 * @description 등록한 물품의 정보를 수정하는 API
 */
export const patchProduct = async ({
	idx,
	title,
	price,
	description,
	category,
	region,
	tag,
	imgUrl,
	mainUrl,
	images,
}) => {
	const response = await axiosInstance.patch("/product", {
		idx,
		title,
		price,
		description,
		category,
		region,
		tag,
		imgUrl,
		mainUrl,
		images,
	});
	return response.data;
};

/**
 * @function
 * @parameter prodIdx : string - 삭제하려는 상품의 index
 * @description 등록한 물품을 삭제하는 API
 */
export const deleteProduct = async ({ prodIdx }) => {
	const response = await axiosInstance.delete("/product", {
		params: {
			prod_idx: prodIdx,
		},
	});
	return response.data;
};

/**
 * @function
 * @description 물품 판매 완료 상태로 변경할 수 있는 API
 */
export const postProductSaleComplete = async () => {
	const response = await axiosInstance.post("/product/sale-complete");
	return response.data;
};

/**
 * @function
 * @parameter keyword : string - 키워드
 * @parameter start :  sring - 상품 검색 기간의 시작일(YYYY-MM-DD)
 * @parameter end :  sring - 상품 검색 기간의 종료일(YYYY-MM-DD)
 * @description 물품의 시세를 검색할 수 있는 API
 */
export const getProductQuote = async ({ keyword, start, end }) => {
	const response = await axiosInstance.get("/product/quote", {
		keyword,
		start,
		end,
	});
	return response.data;
};

/**
 * @function
 * @description 최근 본 상품의 목록을 조회하는 API
 */
export const getProductViewedList = async () => {
	const response = await axiosInstance.get("/product/viewed-list");
	return response.data;
};

/**
 * @function
 * @description 최근 본 상품을 추가하는 API
 */
export const postProductViewedList = async () => {
	const response = await axiosInstance.post("/product/viewed-list");
	return response.data;
};

/**
 * @function
 * @parameter prodIdx : number - 삭제하려는 상품의 index
 * @description 최근 본 상품을 삭제하는 API
 */
export const deleteProductViewedList = async ({ prodIdx }) => {
	const response = await axiosInstance.delete("/product/viewed-list", {
		params: {
			prod_idx: prodIdx,
		},
	});
	return response.data;
};
