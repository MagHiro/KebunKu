import footerlogo from '../assets/footerlogo.svg';
import Facebook from '../assets/Facebook.svg';
import Instagram from '../assets/Instagram.svg';
import Whatsapp from '../assets/Whatsapp.svg';
import Linkedin from '../assets/Linkedin.svg';

export default function footer(){
    return (
        <div id="footer" className='bg-gradient-to-l from-[#05A685] to-[#22C58A]'>
            <div className="max-w-6xl mx-auto w-full font-display flex flex-col justify-center px-5 py-10">
                <section className='w-full mx-auto flex items-start py-5 px-10 rounded-xl gap-20'>
                    <div id="section1" className='flex flex-col gap-y-5 items-start justify-start max-w-xs w-full'>
                        <img src={footerlogo} alt=""/>
                        <h1 className='text-2xl font-bold text-white'>Kebunku</h1>
                        <p className='text-left text-sm text-white'>Adipiscing urna at vel quis justo. Montes, lorem aenean tincidunt donec. Aliquam urna netus neque justo nec donec. Id integer id eu vulputate erat tortor in augue nisi. Faucibus et aliquet.</p>
                    </div>
                    <div id='section2' className='flex flex-col gap-y-4 max-w-fit w-full'>
                        <header className='text-xl text-white font-bold'>
                            Bantuan &#38; Panduan
                        </header>
                        <nav>
                            <ul className='flex flex-col text-white gap-y-3 text-sm'>
                                <li><a href="#!" className='text-white'>Tentang Kebunku</a></li>
                                <li><a href="#!" className='text-white'>Panduan Kebunku</a></li>
                                <li><a href="#!" className='text-white'>Syarat dan Ketentuan</a></li>
                                <li><a href="#!" className='text-white'>kebijakan Privasi</a></li>
                                <li><a href="#!" className='text-white'>Keamanan</a></li>
                                <li><a href="#!" className='text-white'>Karir</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id='section2' className='flex flex-col gap-y-4'>
                        <header className='text-xl text-white font-bold'>
                            Kontak Kami
                        </header>

                        <span className='text-left text-white text-sm'>
                        Jl. Hasanuddin No.36, Rintis, Kec. Lima Puluh, Kota Pekanbaru, Riau 28155
                        </span>

                        <div id='social-media' className='flex space-x-4'>
                            <a href='#'>
                                <img src={Facebook} alt=""/>
                            </a>
                            <a href='#'>
                                <img src={Instagram} alt=""/>
                            </a>
                            <a href='#'>
                                <img src={Whatsapp} alt=""/>
                            </a>
                            <a href='#'>
                                <img src={Linkedin} alt=""/>
                            </a>

                        </div>
                    </div>
                </section>
            </div>
            <footer className='text-center bg-white font-display py-4'>
                <span>© 2022  KEBUNKU</span>
            </footer>
        </div>
    )
}