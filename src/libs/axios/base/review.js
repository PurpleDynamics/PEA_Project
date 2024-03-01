import { axiosInstance } from ".";

/**
 * 리뷰등록
 * @function
 * @parameter payListIdx : number - 리뷰등록 idx
 * @parameter title : string - 제목
 * @parameter content: string - 내용
 * @parameter ondo : number - 온도
 * @parameter images : File[] - 이미지
 * @returns {Promise}
 * @description 
 * - 리뷰 등록을 위한 API
 * - 온도는 전체 온도 나누기 상품 판매의 갯수입니다.
 		ex) 전체 온도 70도 / 판매갯수 2 => 35도
   - 요청결과  200("success") || 400("failure")
 */
export const postReviewByPayListIdx = async ({
	payListIdx,
	title,
	content,
	ondo,
	images,
}) => {
	const response = await axiosInstance.post(
		"/review",
		{ params: { payList_idx: payListIdx } },
		{ title, content, ondo, images }
	);

	return response;
};

/**
 * 2.리뷰 목록 조회
 * @function
 * @parameter page: number - 조회할 리뷰들의 page
 * @description 리뷰들의 목록을 보여주는 api
 */

export const getReviewByPage = async ({ page }) => {
	const response = await axiosInstance.get("/review", { params: { page } });
	return response.data;
};

/**
 * 3.리뷰 상세
 * @function
 * @parameter reviewIdx: number - 조회할 리뷰의 idx
 * @description
 * - 특정한 하나의 review를 나타내는 API
 * - 요청한 특정 리뷰가 상세히 조회됩니다
 */

export const getReviewGetByReviewIdx = async ({ reviewIdx }) => {
	const response = await axiosInstance.get("/review/get", {
		params: { review_idx: reviewIdx },
	});
	return response.data;
};
/**
 * 4.리뷰 수정
 * @function
 * @parameter reviewIdx : number - 수정할 리뷰의 idx
 * @parameter title : string - 새로운 제목
 * @parameter content : string - 새로운 내용
 * @parameter ondo : number - 새로운 온도
 * @parameter imgUrl: string[] - 새로운 서브 기존 이미지 url[]
 * @parameter mainUrl: stirng - 새로운 메인 기존 이미지 url
 * @parameter images: File[] - 새로운 이미지 파일 목록
 * @description
 * - 등록 물품 검색을 위한 API
 * - images 는 main_url이 있다면 [0]~[3]sub, main_url이 없다면 [0]main, [1~3]sub
 * - 요청결과  200("success") || 400("failure")
 */

export const patchReviewByReviewIdx = async ({
	reviewIdx,
	title,
	content,
	ondo,
	img_url: imgUrl,
	main_url: mainUrl,
	images,
}) => {
	const response = await axiosInstance.patch(
		"/review",
		{ params: { review_idx: reviewIdx } },
		{ title, content, ondo, img_url: imgUrl, main_url: mainUrl, images }
	);
	return response;
};
/**
 * 5.리뷰 삭제
 * @function
 * @parameter reviewIdx : number - 삭제할 리뷰의 idx
 * @description
 * - 등록 물품 검색을 위한 API
 * - 요청결과  200("success") || 400("failure")
 */
export const deleteReviewByReviewIdx = async ({ reviewIdx }) => {
	const response = await axiosInstance.delete("/review", {
		params: { review_idx: reviewIdx },
	});
	return response;
};
