import alamat from '../../../assets/alamat.svg';

export default function FJBNavbar(){

    const menu = [
        {
            nama : "Tanaman",
            link : "/#"
        },
        {
            nama : "Sayuran",
            link : "/#"
        },
        {
            nama : "Buah - Buahan",
            link : "/#"
        },
        {
            nama : "Pupuk",
            link : "/#"
        },
        {
            nama : "Alat Berkebun",
            link : "/#"
        },
        {
            nama : "Benih",
            link : "/#"
        },
        {
            nama : "Pestisida",
            link : "/#"
        },
        {
            nama : "Hadiah",
            link : "/#"
        },
    ]

    return (
        <div className="bg-primary font-display">
            <div className="max-w-6xl mx-auto">
                <nav className='flex justify-between text-white py-3 text-sm'>
                    <ul className='flex space-x-10'>
                        {menu.map((menu) => (
                            <li key={menu.id}><a href={menu.link}>{menu.nama}</a></li>
                        ))}
                    </ul>
                    <ul className='flex'>
                        <li className='flex'>
                            <img src={alamat} alt=""/>
                            <span>Pengiriman ke <span className='font-medium'>Pekanbaru</span></span>
                        </li>
                    </ul>    
                </nav>
            </div>
        </div>    
    )
}