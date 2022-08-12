import illustration3 from '../../assets/illustration3.svg'

export default function Home4() {

    const menu = [
        {
            nama : "Perkiraan Panen"
        },
        {
            nama : "Produktifitas"
        },
        {
            nama : "Populasi"
        },
        {
            nama : "Pupuk"
        },
    
    ]
    const tanaman = [
        {
            nama : "Kentang",
            panen: "+ 130 Hari"
        },
        {
            nama : "Jagung",
            panen: "+ 200 Hari"
        },
        {
            nama : "Wortel",
            panen: "+ 70 Hari"
        },
        {
            nama : "Singkong",
            panen: "+ 150 Hari"
        },
    ]

    return (
        <div className='bg-gradient-to-l from-[#05A685] to-[#22C58A] mt-10'>
            <div className="max-w-6xl mx-auto w-full font-display">
                <div className='flex max-w-[60rem] w-full mx-auto gap-10 py-10'>
                    <img src={illustration3} alt="" className='w-[22rem]'/>
                    <div className='flex flex-col gap-y-5 pt-5'>
                        <h4 className='text-white text-[2rem] font-bold'>Kalkulasi Kebutuhan Kebun</h4>
                        <ul className='flex text-white text-base justify-between'>
                            {menu.map((items)=>(
                            <li key={items.id}>
                                <a href='#'>{items.nama}</a>
                            </li>
                            ))}
                        </ul>
                        <div className='flex flex-col'>
                            <label
                                className="text-[0.680rem] text-white font-medium"
                                for="cars"
                                >
                                Tanaman
                            </label>
                            <select id="cars" className='mt-2 rounded-md py-3 px-5 font-medium'>
                                <option value="Pilih Tanaman">Pilih Tanaman</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <span className='text-white text-base'>
                            Silahkan pilih tanaman untuk melihat perkiraan panen
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}