export const Part2 = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-15 h-dvh'>
			<h1 className='font-bold text-5xl after:content-["Astemir"]'>Channel: </h1>
			<input
				type='text'
				placeholder='enter email'
				className='p-3 outline-0 border border-solid border-white/50 transition-colors ease-in-out duration-300 focus:border-orange-400'
			/>
			<button className='rounded-3xl bg-orange-500 px-7 py-2 cursor-pointer border border-#fff/50 border-solid transition-colors ease-in-out duration-300 animate-bounce hover:bg-orange-600'>
				click me
			</button>
			<div className='p-4 bg-amber-600 rounded shadow transition-colors duration-500 md:bg-amber-300 lg:bg-fuchsia-300 xl:bg-red-500 2xl:bg-green-400'>
				change block
			</div>

			<div className='perspective-distant'>
				<iframe src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" className='w-full h-full aspect-video rotate-x-40 rotate-z-20 rounded-3xl shadow-2xl transform-3d'></iframe>
			</div>
		</div>
	)
}
