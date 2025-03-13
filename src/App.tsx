import './App.css'

export function App() {
	return (
		<div className='container mx-auto'>

			<h1 className='text-5xl font-bold text-orange-400 text-center mt-32 '>
				hello, tailwind
			</h1>

			<button className='rounded-3xl bg-orange-500 mt-10 px-7 py-2 cursor-pointer border border-#fff/50 border-solid transition-colors ease-in-out duration-300 animate-bounce hover:bg-orange-600'>
				click me
			</button>

			<div className='bg-blue-400 mt-7 w-24 h-32'>
				width & height
			</div>

			<div className='flex justify-center items-center gap-5 mt-3'>
				<div className='bg-amber-400 w-20 h-20 '/>
				<div className='bg-amber-400 w-20 h-20 '/>
			</div>

			<div className='grid grid-cols-2 gap-5 mt-3'>
				<div className='bg-amber-200 h-20 '/>
				<div className='bg-amber-200 h-20 '/>
			</div>

		</div>
	)
}
