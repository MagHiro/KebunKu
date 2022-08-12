import ads from '../../assets/ads.svg'

export default function Home9() {

    return (
        <div className='bg-white'>
            <div className="max-w-6xl mx-auto w-full font-display flex flex-col justify-center px-5 py-10">
                <section className='max-w-[62rem] w-full mx-auto flex gap-x-10 items-center py-5 px-10 rounded-xl'>
                    <img src={ads} alt=""/>
                    <div id='komunitas' className='flex flex-col gap-y-3'>
                        <h2 className='text-primary text-2xl font-semibold'>Tertarik untuk menjadi bagian dari komunitas Kebunku?</h2>
                        <p className='text-xs max-w-xl w-full '>Dictum tincidunt in nisi, eu ipsum semper tincidunt. Egestas nulla aliquam adipiscing porttitor velit ut. At lectus ornare.</p>
                        <a href='#' className='max-w-fit w-full bg-gradient-to-l from-[#05A685] to-[#22C58A] px-3 text-xs py-3 items-center text-white rounded-lg'>
                            Gabung Komunitas
                        </a>
                    </div>
                </section>
            </div>
        </div>
        
    )
}