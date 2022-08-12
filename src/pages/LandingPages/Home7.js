import blogfoto from '../../assets/blogfoto.svg';
import AMD from '../../assets/AMD.svg';
import Ebay from '../../assets/Ebay.svg';
import Medium from '../../assets/Medium.svg';
import Meta from '../../assets/Meta.svg';
import Microsoft from '../../assets/Microsoft.svg';
import Opensea from '../../assets/Opensea.svg';
import Paypal from '../../assets/Paypal.svg';
import Mitrafoto from '../../assets/mitrafoto.svg';
import Quotes from '../../assets/quotes.svg';

export default function Home7() {

    return (
        <div className='bg-white'>
            <div className="max-w-6xl mx-auto w-full font-display flex flex-col px-5 py-10">
                <header>
                    <h2 className='text-center font-semibold text-2xl'>Mitra Kebunku</h2>
                    <p className='text-sm text-center mt-6'>Non tellus donec elit risus vel pharetra. Lectus egestas imperdiet fringilla ornare cras sem ultrices. Fermentum.</p>
                    <div id='mitralogo' className='flex flex-col justify-center pt-10 gap-y-8'>
                        <div className='flex space-x-6 justify-center'>
                            <img src={AMD} alt=''/>
                            <img src={Ebay} alt=''/>
                            <img src={Medium} alt=''/>
                            <img src={Meta} alt=''/>
                            <img src={Microsoft} alt=''/>
                        </div>
                        <div className='flex space-x-6 justify-center'>
                            <img src={Opensea} alt=''/>
                            <img src={Paypal} alt=''/>
                        </div>
                    </div>
                </header>

                <section className='mt-10 max-w-[60rem] w-full mx-auto flex gap-x-14 items-center'>
                    <img src={Mitrafoto} alt=""/>
                    <div className='flex flex-col gap-y-5'>
                        <h2 className='text-left font-bold text-2xl text-primary'>Kata Mereka</h2>
                        <ul className="grid grid-rows-2 gap-8 list-none">
                            <li className='flex bg-white rounded-xl shadow-xl relative'>
                                <span className='w-full text-left p-5 flex flex-col gap-4'>
                                    <p className='opacity-40 text-sm'>“Auctor dictum nunc odio posuere scelerisque. Ultrices augue curabitur facilisis adipiscing vitae nulla facilisi. Quis neque, donec purus nullam. Arcu integer dui adipiscing condimentum.”</p>
                                    <span className='flex justify-between'>
                                        <h6 className='font-bold text-sm'>Mang Ubed - Petani Lokal</h6>
                                        <span className='text-sm text-[#858585]'>Anggota Sejak 2022</span>
                                    </span>   
                                    <img alt='' src={Quotes} className="absolute -right-7"/>    
                                </span>
                            </li>
                            <li className='flex bg-white rounded-xl shadow-xl relative'>
                                <span className='w-full text-left p-5 flex flex-col gap-4'>
                                    <p className='opacity-40 text-sm'>“Auctor dictum nunc odio posuere scelerisque. Ultrices augue curabitur facilisis adipiscing vitae nulla facilisi. Quis neque, donec purus nullam. Arcu integer dui adipiscing condimentum.”</p>
                                    <span className='flex justify-between'>
                                        <h6 className='font-bold text-sm'>Mang Aso - Petani Lokal</h6>
                                        <span className='text-sm text-[#858585]'>Anggota Sejak 2022</span>
                                    </span>   
                                    <img alt='' src={Quotes} className="absolute -right-7"/>    
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        
    )
}