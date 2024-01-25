import { http, HttpResponse } from "msw";

import productData from "./database/product.json";
import userData from "./database/user.json";

const findProductById = (id) => {
	const $products = productData.products;
	return $products.find((product) => product.product_id === +id);
};

const findUserById = (id) => {
	const $users = userData.users;
	return $users.find((user) => user.user_id === +id);
};

export const handlers = [
	//이부분 잘해석 못하겠음 잠깨고 다시만들어 보기
	http.get("/api/products/:page", ({ params, userId }) => {
		const { page } = params;
		const { user_id } = userId;
		const numOfResponses = 16;

		const $products = productData.products.filter;
		const foundUser = findUserById(user_id);
		const response = {
			product_id: foundProduct.product_id,
			product_name: foundProduct.product_name,
			product_imgSrcList: foundProduct.product_image_src_list,
			product_Price: foundProduct.product_price,
			product_category_list: foundProduct.product_category_list,
			product_pick_count: foundProduct.product_pick_count,
			product_location: foundProduct.product_location,
			product_create_at: foundProduct.product_create_at,
			product_is_payment_method: foundProduct.product_is_payment_method,
			product_is_on_sale: foundProduct.product_is_on_sale,
		};
		return HttpResponse.json(response);
	}),
	http.get("/api/products/detail/:id", ({ params, userId }) => {
		const { id } = params;
		const { user_id } = userId;
		const foundProduct = findProductById(id);
		const foundSeller = findUserById(foundProduct.product_seller);
		const foundUser = findUserById(user_id);
		const response = {
			seller_id: foundSeller.user_id,
			seller_nickname: foundSeller.user_nickname,
			seller_temperature: foundSeller.user_temperature,
			seller_product_list: foundSeller.user_product_list,
			product_id: foundProduct.product_id,
			product_name: foundProduct.product_name,
			product_detail: foundProduct.product_detail,
			product_imgSrcList: foundProduct.product_image_src_list,
			product_Price: foundProduct.product_price,
			product_category_list: foundProduct.product_category_list,
			//같은 카테고리의 상품 어떻게 찾는 지 모루겠다
			product_pick_count: foundProduct.product_pick_count,
			product_location: foundProduct.product_location,
			product_create_at: foundProduct.product_create_at,
			product_is_payment_method: foundProduct.product_is_payment_method,
			user_wish_list: foundUser.user_wish_list,
		};
		return HttpResponse.json(response);
	}),
	http.get("/api/user/:id/payment/:state/total", ({ userId }) => {
		const { user_id } = userId;
		const foundUser = findUserById(user_id);
		const saleProduct = findProductById(foundUser.user_product_list);
		const purchaseProduct = findProductById(foundUser.user_purchase_list);
		const response = {
			user_id: foundUser.user_id,
			user_email: foundUser.user_email,
			user_img_src: foundUser.user_img_src,
			user_nickname: foundUser.user_nickname,
			user_phone_number: foundUser.user_phone_number,
			user_location: foundUser.user_location,
			user_temperature: foundUser.user_temperature,
			user_product_list: foundUser.user_product_list,
			user_purchase_list: foundUser.user_purchase_list,
			user_wish_list: foundUser.user_wish_list,
			product_id: saleProduct.product_id,
			product_name: saleProduct.product_name,
			product_detail: saleProduct.product_detail,
			product_imgSrcList: saleProduct.product_image_src_list,
			product_Price: saleProduct.product_price,
			product_category_list: saleProduct.product_category_list,
			product_pick_count: saleProduct.product_pick_count,
			product_location: saleProduct.product_location,
			product_create_at: saleProduct.product_create_at,
			product_is_payment_method: saleProduct.product_is_payment_method,
			product_is_on_sale: saleProduct.product_is_on_sale,
			purchaseProduct_price: purchaseProduct.product_price, //전부다?
		};
		return HttpResponse.json(response);
	}),
	http.get("/api/user/:id/purchase_list", ({ userId }) => {
		const { user_id } = userId;
		const foundUser = findUserById(user_id);
		const saleProduct = findProductById(foundUser.user_product_list);
		const purchaseProduct = findProductById(foundUser.user_purchase_list);
		const response = {
			user_id: foundUser.user_id,
			user_email: foundUser.user_email,
			user_img_src: foundUser.user_img_src,
			user_nickname: foundUser.user_nickname,
			user_phone_number: foundUser.user_phone_number,
			user_location: foundUser.user_location,
			user_temperature: foundUser.user_temperature,
			user_product_list: foundUser.user_product_list,
			user_purchase_list: foundUser.user_purchase_list,
			user_wish_list: foundUser.user_wish_list,
			product_id: purchaseProduct.product_id,
			product_name: purchaseProduct.product_name,
			product_detail: purchaseProduct.product_detail,
			product_imgSrcList: purchaseProduct.product_image_src_list,
			product_Price: purchaseProduct.product_price,
			product_category_list: purchaseProduct.product_category_list,
			product_pick_count: purchaseProduct.product_pick_count,
			product_location: purchaseProduct.product_location,
			product_create_at: purchaseProduct.product_create_at,
			product_is_payment_method:
				purchaseProduct.product_is_payment_method,
			product_is_on_sale: purchaseProduct.product_is_on_sale,
			saleProduct_price: saleProduct.product_price, //전부다?
		};
		return HttpResponse.json(response);
	}),
	http.get("/api/user/:id/Sold_out/total", ({ userId }) => {
		const { user_id } = userId;
		const foundUser = findUserById(user_id);
		const saleProduct = findProductById(foundUser.user_product_list);
		const purchaseProduct = findProductById(foundUser.user_purchase_list);
		const response = {
			user_id: foundUser.user_id,
			user_email: foundUser.user_email,
			user_img_src: foundUser.user_img_src,
			user_nickname: foundUser.user_nickname,
			user_phone_number: foundUser.user_phone_number,
			user_location: foundUser.user_location,
			user_temperature: foundUser.user_temperature,
			user_product_list: foundUser.user_product_list,
			user_purchase_list: foundUser.user_purchase_list,
			user_wish_list: foundUser.user_wish_list,
			product_id: saleProduct.product_id,
			product_name: saleProduct.product_name,
			product_detail: saleProduct.product_detail,
			product_imgSrcList: saleProduct.product_image_src_list,
			product_Price: saleProduct.product_price,
			product_category_list: saleProduct.product_category_list,
			product_pick_count: saleProduct.product_pick_count,
			product_location: saleProduct.product_location,
			product_create_at: saleProduct.product_create_at,
			product_is_payment_method: saleProduct.product_is_payment_method,
			product_is_on_sale: saleProduct.product_is_on_sale,
			purchaseProduct_price: purchaseProduct.product_price, //전부다?
		};
		return HttpResponse.json(response);
	}),
	http.get("/api/user/:id/wishList", ({ userId }) => {
		const { user_id } = userId;
		const foundUser = findUserById(user_id);
		const foundProduct = findProductById(foundUser.user_wish_list);
		const response = {
			user_id: foundUser.user_id,
			user_email: foundUser.user_email,
			user_img_src: foundUser.user_img_src,
			user_nickname: foundUser.user_nickname,
			user_phone_number: foundUser.user_phone_number,
			user_location: foundUser.user_location,
			user_temperature: foundUser.user_temperature,
			user_product_list: foundUser.user_product_list,
			user_purchase_list: foundUser.user_purchase_list,
			user_wish_list: foundUser.user_wish_list,
			product_id: foundProduct.product_id,
			product_name: foundProduct.product_name,
			product_detail: foundProduct.product_detail,
			product_imgSrcList: foundProduct.product_image_src_list,
			product_Price: foundProduct.product_price,
			product_category_list: foundProduct.product_category_list,
			product_pick_count: foundProduct.product_pick_count,
			product_location: foundProduct.product_location,
			product_create_at: foundProduct.product_create_at,
			product_is_payment_method: foundProduct.product_is_payment_method,
			product_is_on_sale: foundProduct.product_is_on_sale,
		};
		return HttpResponse.json(response);
	}),

	http.get("/api/search/query/:query", ({ query, userId }) => {
		const { id } = params;
		const { user_id } = userId;
		const foundProduct = findProductById(id);
		const foundSeller = findUserById(foundProduct.product_seller);
		const foundUser = findUserById(user_id);
		const response = {
			seller_id: foundSeller.user_id,
			seller_nickname: foundSeller.user_nickname,
			seller_temperature: foundSeller.user_temperature,
			seller_product_list: foundSeller.user_product_list,
			product_id: foundProduct.product_id,
			product_name: foundProduct.product_name,
			product_detail: foundProduct.product_detail,
			product_imgSrcList: foundProduct.product_image_src_list,
			product_Price: foundProduct.product_price,
			product_category_list: foundProduct.product_category_list,
			product_pick_count: foundProduct.product_pick_count,
			product_location: foundProduct.product_location,
			product_create_at: foundProduct.product_create_at,
			product_is_payment_method: foundProduct.product_is_payment_method,
		};
		return HttpResponse.json(response);
	}), //
];
