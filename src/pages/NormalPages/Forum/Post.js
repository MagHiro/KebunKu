import fotouser from "../../../assets/fotouser.svg";
import likebtn from "../../../assets/likebtn.svg";
import dislikebtn from "../../../assets/dislikebtn.svg";
import commentbtn from "../../../assets/commentbtn.svg";
import bookmark from "../../../assets/bookmark.svg";
import morebtn from "../../../assets/morebtn.svg";
import sharebtn from "../../../assets/sharebtn.svg";
import React, { useEffect } from "react";

export default function Post() {
  useEffect(() => {
    const readmore = document.querySelector("#readmore");
    const article = document.getElementById("artikel");
    const expanded = document.getElementById("expanded");

    readmore.onclick = function () {
      expanded.classList.toggle("bg-gradient-to-t");
      article.classList.toggle("readmore");
    };
  }, []);

  return (
    <div className="flex flex-col font-display border max-w-xl w-full rounded-md">
      <div className="postcard font-display block rounded-b-none">
        <header className="flex gap-y-6 flex-col">
          <h2 className="font-medium text-xl">
            Bagaimana cara menanam bibit buah mangga dengan benar?
          </h2>
          <div className="flex space-x-6 text-xs items-center">
            <span className="text-[#0D0F0E] opacity-50">Dijawab oleh</span>
            <span className="flex gap-x-3 items-center">
              <img src={fotouser} alt="" />
              <h4 className="text-[#0D0F0E] font-bold">Admin Kebunku</h4>
            </span>
            <span className="text-[#0D0F0E] opacity-50">3 jam yang lalu</span>
          </div>
        </header>

        <article className="mt-5 relative ">
          <p
            id="artikel"
            className="text-left text-sm readmore overflow-hidden transition-all duration-300"
          >
            Amet at quis et, nibh facilisi viverra. Fringilla convallis ac
            viverra sed senectus sem enim. Eget et pharetra sapien sed est
            purus. Viverra nisi vitae scelerisque ac elit augue bibendum. Nisl
            maecenas eu nibh mollis aliquam tincidunt. Curabitur elementum nam
            viverra vel nulla integer nunc eget. Mauris sed elementum eget
            tempor sit lobortis elit. Enim pellentesque dignissim malesuada
            molestie. Cursus malesuada commodo mus amet, mauris lorem enim
            blandit. Tortor aenean at mi vitae enim sed. Nulla fermentum aliquam
            gravida dui, orci ut sapien auctor. Posuere quis pharetra cum in
            egestas ut. Lobortis convallis netus ultricies sed dolor bibendum
            ipsum nullam. Imperdiet egestas cursus tincidunt eget. Ut venenatis
            integer rutrum dictum tortor. Semper scelerisque auctor rutrum vitae
            cursus sagittis venenatis, rhoncus.
          </p>
          <div
            id="expanded"
            className="absolute bg-gradient-to-t from-white py-7 px-40 bottom-0 "
          >
            <button
              id="readmore"
              className="border bg-white rounded-xl px-3 py-1 text-center text-sm z-20 "
            >
              Lanjutkan Membaca
            </button>
          </div>
        </article>
        <footer className="flex justify-between pt-5">
          <div className="flex space-x-4">
            <span className="flex items-center gap-x-4">
              <img src={likebtn} alt="" />
              <span className="text-sm opacity-50">981</span>
            </span>
            <span className="flex items-center gap-x-4">
              <img src={dislikebtn} alt="" />
              <span className="text-sm opacity-50">981</span>
            </span>
            <span className="flex items-center gap-x-4">
              <img src={commentbtn} alt="" />
              <span className="text-sm opacity-50">981</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center gap-x-4">
              <img src={morebtn} alt="" />
            </span>
            <span className="flex items-center gap-x-4">
              <img src={bookmark} alt="" />
            </span>
            <span className="flex items-center gap-x-4">
              <img src={sharebtn} alt="" />
            </span>
          </div>
        </footer>
      </div>

      <div id="commentsection" className="bg-white rounded-b-lg">
        <header className=" bg-[#F8F8F8]">
          <div className="mx-3 flex py-3 justify-center items-center gap-x-4">
            <img src={fotouser} alt="" className="w-8 h-8" />
            <input
              type="text"
              placeholder="Tambahkan komentarmu disini ..."
              class="bg-white px-6 py-2 w-96 rounded-md placeholder:text-xs focus-visible:border-[#2D303E]"
            />
            <button
              type="button"
              className="bg-primary rounded-md py-3 px-8 text-xs"
            >
              Komentar
            </button>
          </div>
        </header>

        <section>
          <div id="comments">
            <div className="mx-3 flex flex-col py-3 justify-center items-start gap-x-4">
              <div className="flex space-x-6 text-xs items-center">
                <span className="flex gap-x-3 items-center">
                  <img src={fotouser} alt="" className="w-8 h-8" />
                  <h4 className="text-[#0D0F0E] font-bold">Admin Kebunku</h4>
                </span>
                <span className="text-[#0D0F0E] opacity-50">
                  3 jam yang lalu
                </span>
              </div>

              <p className="text-xs opacity-50 ml-11 max-w-md w-full">
                Felis sit ultricies consectetur sed sagittis morbi iaculis. Quam
                lorem tempus sed urna, nisl venenatis, mauris accumsan. Duis
                quis enim, augue id augue velit. Id placerat purus gravida
                maecenas et lectus. Ac vel integer id turpis vitae diam maecenas
                nulla.
              </p>
              <div className="flex space-x-4 ml-11 py-2">
                <span className="flex items-center gap-x-4">
                  <img src={likebtn} alt="" />
                  <span className="text-sm opacity-50">981</span>
                </span>
                <span className="flex items-center gap-x-4">
                  <img src={dislikebtn} alt="" />
                  <span className="text-sm opacity-50">981</span>
                </span>
                <span className="flex items-center gap-x-4">
                  <img src={commentbtn} alt="" />
                  <span className="text-sm opacity-50">981</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
