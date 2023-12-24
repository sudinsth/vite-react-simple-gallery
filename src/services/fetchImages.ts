import axios, {AxiosResponse} from 'axios';

export type PixabayImageType = {
	id: number;
	type: string;
	tags: string;
	user: string;
	views: number;
	likes: number;
	pageURL: string;
	user_id: number;
	imageURL: string;
	comments: number;
	fullHDURL: string;
	imageSize: number;
	downloads: number;
	previewURL: string;
	imageWidth: number;
	imageHeight: number;
	previewWidth: number;
	webformatURL: string;
	userImageURL: string;
	previewHeight: number;
	largeImageURL: string;
	webformatWidth: number;
	webformatHeight: number;
};

interface PixabayApiResponse {
	hits: PixabayImageType[];
	total: number;
	totalHits: number;
}

const image_api_key = import.meta.env.VITE_PIXABAY_KEY;

const fetchImagesServices = async (
	term = 'horror'
): Promise<PixabayImageType[] | undefined> => {
	const response: AxiosResponse<PixabayApiResponse> = await axios.get(
		`https://pixabay.com/api/?key=${image_api_key}&q=${term}&image_type=photo&pretty=true`
	);

	return response?.data?.hits;
};

export {fetchImagesServices};
