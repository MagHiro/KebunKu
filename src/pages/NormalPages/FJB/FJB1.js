import Marketplace from '../../../assets/marketplacelogo.svg';
import Produk from '../../../assets/produkexample.svg';

export default function FJB1() {
  return (
    <section className="max-w-5xl w-full mx-auto flex gap-x-10 items-center bg-gradient-to-l from-[#05A685] to-[#22C58A] py-5 px-10 rounded-xl font-display">
      <div className="flex flex-col gap-y-7 max-w-[16rem] w-full text-center justify-center">
        <div className="flex items-center gap-x-3 justify-center">
          <img src={Marketplace} alt="" />
          <h2 className="text-2xl font-bold text-white">Benih Terlaris</h2>
        </div>

        <p className="text-sm text-white">
          Facilisi libero et lorem pretium viverra maecenas non tempor
          curabitur. Suspendisse dignissim ultrices habitant mattis enim vitae
          adipiscing dui lectus. Ultrices.
        </p>

        <a
          href="#"
          className="bg-primary py-3 px-5 rounded-md text-white text-xs"
        >
          Lihat Benih Terlaris
        </a>
      </div>

      <div className="flex gap-x-4">
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
    </section>
  );
}
