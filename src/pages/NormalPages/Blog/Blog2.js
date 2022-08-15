import moreicon from "../../../assets/moreicon.svg";
import blogpost from "../../../assets/blogpost.svg";

export default function Blog2() {

    const blog = {
        judul : "Tips agar kebun terus bersinar terang",
        kategori : "Tutorial",
        author : "Kang Admin"
    }

    let data = []

    for (let index = 0; index < 9; index++) {
        data.push(blog);
    }

  return (
    <div className="max-w-4xl w-full mx-auto font-display">
      <header className="flex justify-between items-center pb-5">
        <h2 className="font-bold text-xl">Artikel terbaru</h2>
        <button className="flex justify-between items-center bg-primary rounded-full text-white py-2 px-6 font-semibold gap-x-3 text-sm">
          <span>Lainnya</span>
          <img src={moreicon} alt="" />
        </button>
      </header>

      <section>
        <div className="grid grid-cols-3 grid-flow-row gap-6">

        {data.map((data)=>(
            <div className="card p-0">
            <img src={blogpost} alt="" className="rounded-lg" />
            <section key={data.id} className="py-4 px-4">
              <header className="mb-2">
                <h4 className="font-bold text-primary text-[0.6rem]">{data.kategori}</h4>
              </header>
              <section className="mb-2">
                <h2 className="font-bold text-s">
                  {data.judul}
                </h2>
              </section>
              <footer className="flex justify-between text-xs">
                <span className="font-medium">
                  <span className="opacity-50">oleh </span>
                   {data.author}
                </span>
              </footer>
            </section>
          </div>
        ))}
          
        </div>
      </section>
    </div>
  );
}
