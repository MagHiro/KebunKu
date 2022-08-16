import investasi from "../../assets/investasi.svg";
import information from "../../assets/informationlogo.svg";

export default function Home3() {
  return (
    <div className="max-w-4xl md:max-w-6xl w-full mx-auto font-display mt-14 flex flex-col items-center">
        <header id="investasi-header" className="px-6 md:px-0">
            <h1 className="text-[2rem] font-bold text-center mb-2">
            Coba Investasi Berkebun untuk{" "}
            <span className="text-primary italic">passive income</span> anda!
            </h1>
            <p className="text-base text-center">
            Kebunku dapat membantu anda untuk mendapatkan hasil kebun tanpa perlu
            memiliki sebuah kebun
            </p>
        </header>

        <section
            id="investasi-tab"
            className="mx-auto w-full max-w-full md:max-w-[60rem] flex flex-col md:flex-row justify-center gap-x-5 mt-11"
        >
            <div className="py-8 px-12 rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-none md:max-w-sm">
            <h4 className="text-xl font-bold">Simulasi Investasi</h4>
            <form className="flex flex-col mt-6 space-y-7">
                <div className="flex flex-col">
                    <label
                    className="text-[0.625rem] text-[#676767] font-medium"
                    for="fname"
                    >
                    Tanaman
                    </label>
                    <input
                    className="h-8 border border-[#EDEDED] rounded-[0.275rem] mt-1 px-4 font-medium text-xs py-5"
                    type="text"
                    id="tanaman"
                    value="Tanaman Buah Jeruk"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                    className="text-[0.625rem] text-[#676767] font-medium"
                    for="fname"
                    >
                    Jumlah
                    </label>
                    <input
                    className="h-8 border border-[#EDEDED] rounded-[0.275rem] mt-1 px-4 font-medium text-xs py-5"
                    type="text"
                    id="Jumlah"
                    value="8 Pohon"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                    className="text-[0.625rem] text-[#676767] font-medium"
                    for="fname"
                    >
                    Perawatan
                    </label>
                    <input
                    className="h-8 border border-[#EDEDED] rounded-[0.275rem] mt-1 px-4 font-medium text-xs py-5"
                    type="text"
                    id="Perawatan"
                    value="Grade A"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                    className="text-[0.625rem] text-[#676767] font-medium"
                    for="fname"
                    >
                    Modal Investasi
                    </label>
                    <input
                    className="h-8 border border-[#EDEDED] rounded-[0.275rem] mt-1 px-4 font-medium text-xs py-5"
                    type="text"
                    id="investasi"
                    value="Rp. 10.000.000"
                    />
                </div>
                

                <input type="submit" value="Submit" className="bg-gradient-to-l from-[#05A685] to-[#22C58A] text-white py-2 mt-4 rounded-[0.275rem] cursor-pointer hover:drop-shadow-xl hover:scale-110 transition duration-200 ease-in-out" />
            </form>
            </div>

            <img src={investasi} alt="" className="w-[17.8rem] h-[26.8] mx-auto md:mx-none mt-8 md:mt-none" />

            <div className="py-8 px-1 flex flex-col items-center md:block md:mx-0">
                <header id="kepala">
                    <h1 className="text-center md:text-left text-base font-bold text-[#676767]">
                    Investasi
                    </h1>
                    <h4 className="text-xl font-bold text-center md:text-left">Buah Jeruk</h4>
                    <p className="text-center md:text-left text-sm md:text-[0.625rem] text-[#676767] max-w-[13rem] md:max-w-[11.3rem] w-full mt-3">
                    Estimasi Panen per <span className="text-primary">± 8 bulan</span>{" "}
                    sekali Musim Panen{" "}
                    <span className="text-primary">Juli - September</span> Resiko
                    Investasi <span className="text-primary">Sedang</span>
                    </p>
                </header>
                <section className="flex flex-col w-[90%] md:w-auto items-centerS">
                    <button className="md:max-w-[11.3rem] md:w-full py-4 md:px-6 rounded-xl drop-shadow-lg shadow-lg text-[0.625rem] text-[#676767] font-medium mt-7">
                    Buah Jeruk Nagami
                    </button>
                    <button className="md:max-w-[11.3rem] md:w-full py-4 md:px-6 rounded-xl drop-shadow-lg shadow-lg text-[0.625rem] text-[#676767] font-medium mt-5">
                    Berbuah dalam <span className="text-primary">1-2 Tahun</span>
                    </button>
                    <button className="md:max-w-[11.3rem] md:w-full py-4 md:px-6 rounded-xl drop-shadow-lg shadow-lg text-[0.625rem] text-[#676767] font-medium mt-5">
                    Jeruk Favorit di Indonesia
                    </button>

                    <div className="mt-7">
                    <p className="text-center md:text-left text-[0.625rem] text-[#676767] md:max-w-[11.3rem] md:w-full mt-3">
                        Nilai investasi dalam sekali panen
                    </p>
                    <h2 className="text-primary text-center md:text-left text-2xl font-medium mt-2">
                        Rp 17jt - 18jt
                    </h2>
                    </div>
                </section>
            </div>

        </section>
        
        <footer className="bg-[#DDFFF5] px-4 py-2 max-w-fit w-full flex mt-10 rounded-md">
            <span className="flex gap-5">
                <img src={information} alt=""/>
                <h4 className="text-[#676767] text-[0.625rem]">Simulasi hanya berupa perkiraan berdasarkan hasil panen terakhir</h4>
            </span>
        </footer>
    </div>
  );
}
