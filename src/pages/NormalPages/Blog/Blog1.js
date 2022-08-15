import bloghero from '../../../assets/bloghero.svg'

export default function Blog1(){
    return(
        <div className="max-w-6xl w-full mx-auto font-display py-12">
            <div className='relative'>
                <img src={bloghero} alt="" className="max-w-4xl w-full mx-auto"/>
                <div className='card w-[60%] absolute mx-auto left-0 right-0 bottom-10 '>
                    <header className='mb-2'>
                        <h4 className='font-bold text-primary text-xs'>Tutorial</h4>
                    </header>
                    <section className='mb-2'>
                        <h2 className='font-semibold text-xl'>Cara Menanam Bibit Cabai dengan Mudah dan Praktis</h2>
                    </section>
                    <footer className='flex justify-between text-xs'>
                        <span className='font-medium'>
                            <span className='opacity-50'>oleh </span>
                            Kang Admin
                        </span>
                        <span>
                            20 Juli 2022
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    )
}