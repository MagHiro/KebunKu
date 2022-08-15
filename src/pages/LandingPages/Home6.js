import blogfoto from '../../assets/blogfoto.svg';

export default function Home6() {

    return (
        <div className='bg-[#F9FAFB] mt-20'>
            <div className="max-w-6xl mx-auto w-full font-display flex flex-col px-5 py-10">
                <header>
                    <h2 className='text-center font-semibold text-2xl'>Informasi Bermanfaat</h2>
                </header>
                <section className='mt-10'>
                    <ul className="grid grid-cols-2 gap-8 list-none">
                        <li className='flex bg-white rounded-lg shadow-lg'>
                            <img src={blogfoto} alt=""/>
                            <span className='max-w-fit w-full text-left p-5'>
                                <h6 className='font-medium text-md'>Adipiscing nunc iaculis dictum mi molestie nunc ultricies vitae arcu.</h6>
                                <p className='opacity-40 text-xs'>Tortor at dictum posuere ullamcorper. Cursus magna congue pulvinar imperdiet non, consectetur purus, felis. Sed consequat, ornare eget massa. Sit consequat aliquet amet placerat eu, et at.</p>
                            </span>
                        </li>
                        <li className='flex bg-white rounded-lg shadow-lg'>
                            <img src={blogfoto} alt=""/>
                            <span className='max-w-fit w-full text-left p-5'>
                                <h6 className='font-medium text-md'>Adipiscing nunc iaculis dictum mi molestie nunc ultricies vitae arcu.</h6>
                                <p className='opacity-40 text-xs'>Tortor at dictum posuere ullamcorper. Cursus magna congue pulvinar imperdiet non, consectetur purus, felis. Sed consequat, ornare eget massa. Sit consequat aliquet amet placerat eu, et at.</p>
                            </span>
                        </li>
                        <li className='flex bg-white rounded-lg shadow-lg'>
                            <img src={blogfoto} alt=""/>
                            <span className='max-w-fit w-full text-left p-5'>
                                <h6 className='font-medium text-md'>Adipiscing nunc iaculis dictum mi molestie nunc ultricies vitae arcu.</h6>
                                <p className='opacity-40 text-xs'>Tortor at dictum posuere ullamcorper. Cursus magna congue pulvinar imperdiet non, consectetur purus, felis. Sed consequat, ornare eget massa. Sit consequat aliquet amet placerat eu, et at.</p>
                            </span>
                        </li>
                        <li className='flex bg-white rounded-lg shadow-lg'>
                            <img src={blogfoto} alt=""/>
                            <span className='max-w-fit w-full text-left p-5'>
                                <h6 className='font-medium text-md'>Adipiscing nunc iaculis dictum mi molestie nunc ultricies vitae arcu.</h6>
                                <p className='opacity-40 text-xs'>Tortor at dictum posuere ullamcorper. Cursus magna congue pulvinar imperdiet non, consectetur purus, felis. Sed consequat, ornare eget massa. Sit consequat aliquet amet placerat eu, et at.</p>
                            </span>
                        </li>
                    </ul>
                </section>

                <a href="#!" className='text-primary text-center mt-7'>
                    Kunjungi Blog Kebunku
                </a>
            </div>
        </div>
        
    )
}