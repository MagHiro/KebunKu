import komunitas1 from "../../../assets/komunitas1.svg";
import findkomunitas from "../../../assets/findkomunitas.svg";
import Produk from "../../../assets/produkexample.svg";

export default function Rightbar() {
  return (
    <nav className="font-display flex-flex-col space-y-10">
      <button className="bg-primary w-full text-base font-semibold text-white py-3 rounded-md">
        + Mulai Diskusi
      </button>
      <div className="card">
        <h2 className="font-semibold text-center text-lg mb-4">
          Komunitas Populer
        </h2>
        <ul className="flex flex-col gap-y-3">
          <li
            className="flex justify-start gap-5 items-center px-4 py-3 border-l-4 activebar"
            active
          >
            <span className="font-medium opacity-70">1</span>
            <span className="flex items-center gap-4">
              <img src={komunitas1} alt="" className="w-8 h-8" />
              <span className="flex flex-col">
                <span className=" max-w-[10rem] w-full text-left text-xs font-semibold">
                  Pekanbaru New
                </span>
                <span className=" max-w-[10rem] w-full text-left text-xs">
                  137 Diskusi
                </span>
              </span>
            </span>
          </li>
          <li
            className="flex justify-start gap-5 items-center px-4 py-3 border-l-4"
            active
          >
            <span className="font-medium opacity-70">2</span>
            <span className="flex items-center gap-4">
              <img src={komunitas1} alt="" className="w-8 h-8" />
              <span className="flex flex-col">
                <span className=" max-w-[10rem] w-full text-left text-xs font-semibold">
                  Pekanbaru New
                </span>
                <span className=" max-w-[10rem] w-full text-left text-xs">
                  137 Diskusi
                </span>
              </span>
            </span>
          </li>
          <li
            className="flex justify-start gap-5 items-center px-4 py-3 border-l-4"
            active
          >
            <span className="font-medium opacity-70">3</span>
            <span className="flex items-center gap-4">
              <img src={komunitas1} alt="" className="w-8 h-8" />
              <span className="flex flex-col">
                <span className=" max-w-[10rem] w-full text-left text-xs font-semibold">
                  Pekanbaru New
                </span>
                <span className=" max-w-[10rem] w-full text-left text-xs">
                  137 Diskusi
                </span>
              </span>
            </span>
          </li>
          <li
            className="flex justify-start gap-5 items-center px-4 py-3 border-l-4"
            active
          >
            <span className="font-medium opacity-70">4</span>
            <span className="flex items-center gap-4">
              <img src={komunitas1} alt="" className="w-8 h-8" />
              <span className="flex flex-col">
                <span className=" max-w-[10rem] w-full text-left text-xs font-semibold">
                  Pekanbaru New
                </span>
                <span className=" max-w-[10rem] w-full text-left text-xs">
                  137 Diskusi
                </span>
              </span>
            </span>
          </li>
        </ul>

        <div className="flex justify-start gap-5 items-center px-4 mt-4 border-l-4 border-transparent">
          <img src={findkomunitas} alt="" />
          <span className=" max-w-[10rem] w-full text-left">
            Cari Komunitas
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 w-40 mx-auto">
        <div
          id="card"
          className="flex flex-col p-2 gap-y-1 bg-white rounded-md"
        >
          <img src={Produk} alt="" />
          <section id="produkinformation" className="flex flex-col gap-y-1">
            <span className="font-semibold text-xs">
              Benih Tanaman Kangkung Premium
            </span>
            <span className="text-xs text-[#858585]">Pekanbaru</span>
            <span className="font-bold text-xs">Rp 15.000</span>
            <span className="text-xs text-[#858585]">Terjual 2rb+</span>
          </section>
        </div>
        <div
          id="card"
          className="flex flex-col p-2 gap-y-1 bg-white rounded-md"
        >
          <img src={Produk} alt="" />
          <section id="produkinformation" className="flex flex-col gap-y-1">
            <span className="font-semibold text-xs">
              Benih Tanaman Kangkung Premium
            </span>
            <span className="text-xs text-[#858585]">Pekanbaru</span>
            <span className="font-bold text-xs">Rp 15.000</span>
            <span className="text-xs text-[#858585]">Terjual 2rb+</span>
          </section>
        </div>
        <div
          id="card"
          className="flex flex-col p-2 gap-y-1 bg-white rounded-md"
        >
          <img src={Produk} alt="" />
          <section id="produkinformation" className="flex flex-col gap-y-1">
            <span className="font-semibold text-xs">
              Benih Tanaman Kangkung Premium
            </span>
            <span className="text-xs text-[#858585]">Pekanbaru</span>
            <span className="font-bold text-xs">Rp 15.000</span>
            <span className="text-xs text-[#858585]">Terjual 2rb+</span>
          </section>
        </div>
        <div
          id="card"
          className="flex flex-col p-2 gap-y-1 bg-white rounded-md"
        >
          <img src={Produk} alt="" />
          <section id="produkinformation" className="flex flex-col gap-y-1">
            <span className="font-semibold text-xs">
              Benih Tanaman Kangkung Premium
            </span>
            <span className="text-xs text-[#858585]">Pekanbaru</span>
            <span className="font-bold text-xs">Rp 15.000</span>
            <span className="text-xs text-[#858585]">Terjual 2rb+</span>
          </section>
        </div>
      </div>
    </nav>
  );
}
