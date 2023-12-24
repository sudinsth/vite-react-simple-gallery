import {FC, FormEvent, useState} from 'react';

interface ISearchImage {
	searchTerm: (value: string) => void;
}

const SearchImage: FC<ISearchImage> = ({searchTerm}) => {
	const [searchText, setSearchText] = useState<string>('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchTerm(searchText);
	};

	return (
		<div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
			<form action='#' onSubmit={onSubmit} className='w-full max-w-sm'>
				<div className='flex items-center border-b-2 border-sky-500 py-2'>
					<input
						type='text'
						placeholder='Search Image'
						onChange={(e) => setSearchText(e.target.value)}
						className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
					/>
					<button
						className='flex-shrink-0 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-sm border-4 text-white py-1 px-2 rounded'
						type='submit'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchImage;
