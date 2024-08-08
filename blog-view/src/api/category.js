import axios from '@/plugins/axios'

export function getBlogListByCategoryName(categoryName, pageNum) {
	return axios({
		url: 'blog/getBlogByCategoryName',
		method: 'GET',
		params: {
			categoryName,
			pageNum
		}
	})
}