import eclipse from '../../assets/Ellipse11.svg';

export default function Home5() {

    return (
        <div className='bg-white mt-10'>
            <div className="max-w-6xl mx-auto w-full font-display flex flex-col">
                <header>
                    <h2 className='text-center font-semibold text-2xl'>Tanaman</h2>
                </header>
                <section className='mt-10'>
                    <ul className="grid grid-cols-5 grid-flow-col list-none">
                        <li className='flex flex-col gap-y-10 items-center'>
                            <div className='bg-[#F9FAFB] py-2 px-2 rounded-md'>
                                <img src={eclipse} alt=""/>
                            </div>
                            <span className='text-center'>
                                <h6>Semangka</h6>
                                <span className='opacity-40'>Citrulus</span>
                            </span>
                        </li>
                        <li className='flex flex-col gap-y-10 items-center'>
                            <div className='bg-[#F9FAFB] py-2 px-2 rounded-md'>
                                <img src={eclipse} alt=""/>
                            </div>
                            <span className='text-center'>
                                <h6>Semangka</h6>
                                <span className='opacity-40'>Citrulus</span>
                            </span>
                        </li>
                        <li className='flex flex-col gap-y-10 items-center'>
                            <div className='bg-[#F9FAFB] py-2 px-2 rounded-md'>
                                <img src={eclipse} alt=""/>
                            </div>
                            <span className='text-center'>
                                <h6>Semangka</h6>
                                <span className='opacity-40'>Citrulus</span>
                            </span>
                        </li>
                        <li className='flex flex-col gap-y-10 items-center'>
                            <div className='bg-[#F9FAFB] py-2 px-2 rounded-md'>
                                <img src={eclipse} alt=""/>
                            </div>
                            <span className='text-center'>
                                <h6>Semangka</h6>
                                <span className='opacity-40'>Citrulus</span>
                            </span>
                        </li>
                        <li className='flex flex-col gap-y-10 items-center'>
                            <div className='bg-[#F9FAFB] py-2 px-2 rounded-md'>
                                <img src={eclipse} alt=""/>
                            </div>
                            <span className='text-center'>
                                <h6>Semangka</h6>
                                <span className='opacity-40'>Citrulus</span>
                            </span>
                        </li>
                    </ul>
                </section>

                <button className='text-primary items-center mt-7'>
                    Lihat Tanaman Lainnya
                </button>
            </div>
        </div>
        
    )
}