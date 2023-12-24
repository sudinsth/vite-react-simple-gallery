import {FC} from 'react';

interface IModalImage {
	modal: boolean;
	image: string | undefined;
	handleClose: () => void;
}

const ModalImage: FC<IModalImage> = ({modal, image, handleClose}) => {
	return (
		<div
			className={
				modal
					? 'fixed z-50 inset-0 h-full bg-black flex justify-center items-center overflow-hidden transition-opacity duration-400 ease-in-out transition-visibility duration-400 ease'
					: 'absolute transition-opacity duration-400 ease-in-out transition-visibility duration-400 ease transform scale-0 opacity-0'
			}
		>
			<img src={image} className='h-full object-contain' />

			<div
				className='absolute z-50 text-white top-8 right-5'
				onClick={handleClose}
			>
				CLOSE
			</div>
		</div>
	);
};

export default ModalImage;
