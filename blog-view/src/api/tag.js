import axios from '@/plugins/axios'

export function getBlogListByTagName(tagName, pageNum) {
	return axios({
		url: 'blog/getBlogByTagName',
		method: 'GET',
		params: {
			tagName,
			pageNum
		}
	})
}