import {useState, useEffect, useCallback} from 'react';

import ImageCard from './components/ImageCard';
import SearchImage from './components/SearchImage';

import {PixabayImageType, fetchImagesServices} from './services/fetchImages';
import ModalImage from './components/ModalImage';

function App() {
	const [imageList, setImageList] = useState<PixabayImageType[] | undefined>(
		[]
	);
	const [loading, setLoading] = useState(true);
	const [term, setTerm] = useState<string>('bikes');
	const [modal, setModal] = useState(false);
	const [modalImg, setModalImg] = useState<string | undefined>('');

	const fetchImages = useCallback(async (searchTerm: string) => {
		try {
			const fetchingImages = await fetchImagesServices(searchTerm);
			setImageList(fetchingImages);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchImages(term);
	}, [fetchImages, term]);

	const handleSearch = useCallback((searched: string) => {
		setTerm(searched);
	}, []);

	const handleOpenModal = (imgIndex: number) => {
		setModalImg(imageList?.[imgIndex]?.webformatURL);
		setModal(true);
	};

	const handleCloseModal = () => setModal(false);

	return (
		<div className='container mx-auto my-auto mb-10 ps-10 pe-10'>
			<SearchImage searchTerm={handleSearch} />

			{!loading && !imageList?.length && (
				<h1 className='text-3xl text-center'>No images found</h1>
			)}
			{loading ? (
				<h1 className='text-3xl text-center mx-auto'>Loading...</h1>
			) : (
				<>
					{/* Modal */}
					<ModalImage
						modal={modal}
						image={modalImg}
						handleClose={handleCloseModal}
					/>

					{/* Gallery */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-items-center'>
						{imageList?.map((image, index) => (
							<div
								key={image.id}
								className='flex justify-center h-[334px] w-[230px]'
							>
								<ImageCard
									image={image}
									index={index}
									onClick={handleOpenModal}
								/>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
