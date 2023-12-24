import {FC} from 'react';
import {PixabayImageType} from '../services/fetchImages';

interface IImageCard {
	image: PixabayImageType;
	index: number;
	onClick?: (index: number) => void;
}

const ImageCard: FC<IImageCard> = ({image, index, onClick}) => {
	const {user: author, webformatURL: images} = image;

	return (
		<div
			className='relative group overflow:hidden'
			onClick={() => onClick && onClick(index)}
		>
			<div className='absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 tranform translate-y-100 group-hover:translate-y-0'>
				<div className='bg-gradient-to-t from-black to-transparent p-4'>
					<p className='font-bold text-white text-md '>{`by ${author}`}</p>
				</div>
			</div>

			<img
				alt=''
				src={images}
				loading='lazy'
				draggable={false}
				className='w-[230px] h-full rounded object-cover'
			/>
		</div>
	);
};

export default ImageCard;
