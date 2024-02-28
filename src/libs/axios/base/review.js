import { axiosInstance } from ".";

/**
 * 리뷰등록
 * @function
 * @parameter payList_idx : number - 리뷰등록 idx
 * @parameter title : string - 제목
 * @parameter content: string - 내용
 * @parameter ondo : number - 온도
 * @parameter images : File[] - 이미지
 * @returns {Promise}
 * @description 리뷰 등록을 위한 API
 *  - 온도는 전체 온도 나누기 상품 판매의 갯수입니다.
 		ex) 전체 온도 70도 / 판매갯수 2 => 35도
	- 요청결과  200("success") || 400("failure")
 */
export const postReviewByIndex = async ({
	payList_idx,
	title,
	content,
	ondo,
	images,
}) => {
	const response = await axiosInstance.post(
		`/review?payList_idx=${payList_idx}`,
		{ title, content, ondo, images }
	);

	return response;
};

/**
 * 2.리뷰 목록 조회
 * @function
 * @parameter page: number - 조회할 리뷰들의 page
 * @description 리뷰들의 목록을 보여주는 api
 * - 리뷰 목록을 조회 합니다 
 * - {
	reviewList: PayList[]
}

--- 구매 내역 --
PayList: {
	idx: number (payList_idx)
	created_at: Date
	Product : {
		idx: prod_idx
		title: stirng
		price: number
		img_url: string
		User: {
			nicK_name: string
			profile_url: string
			socket: string
			Ondo: {
				ondo: string
			}
		}
	}
	Review: Reveiw | null (null 이어야만 리뷰 작성 가능)
}

-- 리뷰 상세 --

Review: {
        "title": string,
        "content": string,
        "ondo": number,
        "img_url": string,
          "nick_name": string,
          "profile_url": string
        },
				ReviewImages: [
          {
            "img_url":string
          }
        ]
      }

 */

export const getReviewList = async ({ page }) => {
	const response = await axiosInstance.get("/review", { params: { page } });
	console.log(response.data);
	return response.data;
};

/**
 * 3.리뷰 상세
 * @function
 * @parameter review_idx: number - 조회할 리뷰의 idx
 * @description 특정한 하나의 review를 나타내는 API
 * - 요청한 특정 리뷰가 상세히 조회됩니다
 * -
-- 리뷰상세 --

Review: {
        "title": string,
        "content": string,
        "ondo": number,
        "img_url": string,
          "nick_name": string,
          "profile_url": string
        },
				ReviewImages: [
          {
            "img_url":string
          }
        ]
      }


-- 구매내역 --

PayList: {
		idx: number (payList_idx)
		created_at: Date
		Product : {
			idx: prod_idx
			title: stirng
			price: numbe
			img_url: string
			User: {
				nicK_name: string
				profile_url: string
				socket: string
				Ondo: {
					ondo: string
				}
			}
		}
}


 */

export const getReviewByIndex = async ({ review_idx }) => {
	const response = await axiosInstance.get(
		`/review/get?review_idx=${review_idx}`
	);
	return response.data;
};
/**
 * 4.리뷰 수정
 * @function
 * @parameter review_idx : number - 수정할 리뷰의 idx
 * @parameter title : string - 새로운 제목
 * @parameter content : string - 새로운 내용
 * @parameter ondo : number - 새로운 온도
 * @parameter img_url: string[] - 새로운 서브 기존 이미지 url[]
 * @parameter main_url: stirng - 새로운 메인 기존 이미지 url
 * @parameter images: File[] - 새로운 이미지 파일 목록
 * @description 등록 물품 검색을 위한 API
 * - images 는 main_url이 있다면 [0]~[3]sub, main_url이 없다면 [0]main, [1~3]sub
 * - 요청결과  200("success") || 400("failure")
 */

export const patchReviewByIndex = async ({ review_idx }) => {
	const response = await axiosInstance.patch(
		`/review?review_idx=${review_idx}`
	);
	return response;
};
/**
 * 5.리뷰 삭제
 * @function
 * @parameter review_idx : number - 삭제할 리뷰의 idx
 * @description 등록 물품 검색을 위한 API
 * - 요청결과  200("success") || 400("failure")
 */
export const deleteReviewByIndex = async ({ review_idx }) => {
	const response = await axiosInstance.delete(
		`/review?review_idx=${review_idx}`
	);
	return response;
};
