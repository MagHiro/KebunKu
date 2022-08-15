import React, { useEffect } from "react";
import Produk from "../../../assets/produkmarketplace.svg";
export default function FJB2() {
  const menu = 
    {
        nama : "Benih Tanaman Kangkung Premium",
        asal : "Pekanbaru",
        harga : "Rp 15.000",
        terjual : "2rb+"
    };
    
    let data = [];

    for (let index = 0; index < 12; index++) {
        data.push(menu);    
    }
  

  return (
    <div className="max-w-5xl w-full mx-auto font-display">
      <div className="p-3">
        <div className="grid grid-cols-4 grid-flow-row gap-x-8 gap-y-4">
            {data.map((data) => (
                <div
                id="card"
                className="flex flex-col card px-2 py-2"
                
              >
                <img src={Produk} alt="" className=""/>
                <section key={data.index} id="produkinformation" className="flex flex-col gap-y-1">
                  <span className="font-bold text-sm mt-1">
                    {data.nama}
                  </span>
                  <span className="text-sm text-[#858585]">{data.asal}</span>
                  <span className="font-bold text-sm">{data.harga}</span>
                  <span className="text-sm text-[#858585]">Terjual {data.terjual}</span>
                </section>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}
