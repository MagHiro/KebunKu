import beranda from '../../../assets/beranda.svg';
import bookmark from '../../../assets/bookmark.svg';
import diskusi from '../../../assets/diskusi.svg';
import createkomunitas from '../../../assets/createkomunitas.svg';
import komunitas1 from '../../../assets/komunitas1.svg';
import komunitas2 from '../../../assets/komunitas2.svg';
import findkomunitas from '../../../assets/findkomunitas.svg';

export default function Sidebar() {
    return (
        <nav className='font-display'>
            <ul className='flex flex-col gap-y-3'>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 activebar" active>
                    <img src={beranda} alt=""/>
                    <span className='text-primary max-w-[10rem] w-full text-left'>Beranda</span>
                </li>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={bookmark} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Bookmarks</span>
                </li>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={diskusi} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Diskusi Saya</span>
                </li>
            </ul>

            <ul className='flex flex-col gap-y-3 mt-10'>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={createkomunitas} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Buat Komunitas</span>
                </li>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={komunitas1} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Pekanbaru Green</span>
                </li>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={komunitas2} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Indonesia Satu</span>
                </li>
                <li className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 border-transparent">
                    <img src={findkomunitas} alt=""/>
                    <span className=' max-w-[10rem] w-full text-left'>Cari Komunitas</span>
                </li>
            </ul>

        </nav>
    )
}