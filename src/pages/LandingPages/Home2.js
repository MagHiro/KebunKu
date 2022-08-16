import "./landingpage.css";
import logonav from "../../assets/logonav.svg";
import illustration1 from "../../assets/illustration1.svg";
import illustration2 from "../../assets/illustration2.svg";

export default function Home2() {
  return (
    <div className="max-w-4xl w-full md:max-w-6xl mx-auto font-display">
      <div className="bg-white pt-10 px-6 md:px-0">
        <div className="flex flex-col text-center items-center gap-y-4">
          <img alt="logonav" src={logonav} width={48} height={48} />
          <div className="after:content-[''] after:block after:h-1 after:mx-auto after:w-36 after:bg-[#F2F2F2] after:opacity-100 after:mt-7">
            <span className="text-lg md:text-[2rem] text-center font-medium max-w-xs w-full mx-auto md:mx-none">
              Berkebun menjadi lebih mudah bersama Kebunku
            </span>
            <p className="text-base text-center items-start w-full max-w-sm md:max-w-[52rem] mt-5 md:mt-3 leading-tight mx-auto md:mx-none">
              Nulla purus in nunc ornare purus. Erat suscipit faucibus tellus
              velit enim posuere dictumst pharetra, etiam. Laoreet porttitor at
              laoreet euismod nibh vulputate et. Mauris volutpat varius eget
              odio sit tempus cras non pulvinar. Netus nec, eu in facilisis id.
              Nulla ac orci amet nam lacus amet. Ac non.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-10">
        <div className="w-[90%] md:w-full md:max-w-[60rem] mx-auto rounded-lg shadow-md drop-shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-x-8 p-5 md:p-11">
            <img src={illustration1} alt="" className="w-[25rem] h-[12.5rem]" />
            <div className="font-display">
              <h4 className="mt-3 md:mt-0 text-center md:text-left text-2xl text-primary font-medium mb-2">
                Ingin memulai berkebun?
              </h4>
              <span className="text-sm font-medium">
                Ayo memulai dari yang paling sederhana
              </span>
              <p className="text-sm text-left leading-tight w-full max-w-md mt-4 mb-3">
                Sed integer nulla pharetra aliquam non faucibus pellentesque.
                Dignissim ut a, leo, pretium nisi id. Potenti suscipit egestas
                adipiscing vulputate consectetur nulla. Mi, nunc viverra tortor
                velit ultricies. Amet quam accumsan cursus enim nunc ac.
              </p>
              <button className="bg-primary text-white py-4 md:py-2 px-4 text-sm rounded-md font-bold items-center transition duration-200 hover:bg-teal-600 sm:w-full sm:max-w-[14rem]">
                Belajar Berkebun
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10">
        <div className="w-[90%] md:w-full md:max-w-[60rem] mx-auto rounded-lg shadow-md drop-shadow-md">
          <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-x-8 p-5 md:p-11">
            <img src={illustration2} alt="" className="w-[25rem] h-[12.5rem]" />
            <div className="font-display">
              <h4 className="mt-3 md:mt-0 text-center md:text-left text-2xl text-secondary font-medium mb-2">
                Diskusi Mengenai Tanaman?
              </h4>
              <span className="text-sm font-medium">
                Dengan komunitas, membantu satu sama lain
              </span>
              <p className="text-sm text-left text-black leading-tight w-full max-w-md mt-4 mb-3">
                Erat quisque urna mauris laoreet magna. Nec pellentesque
                malesuada id pharetra nisi parturient dolor nisi, viverra.
                Volutpat etiam amet suscipit lacinia enim tortor urna gravida
                arcu. Iaculis dictumst nisl sed viverra vulputate accumsan
                aliquet turpis eu.
              </p>
              <button className="mb-4 md:mb-0 bg-secondary text-white py-4 md:py-2 px-4 text-sm rounded-md font-bold items-center transition duration-200 hover:bg-teal-600 sm:w-full sm:max-w-[14rem]">
                Gabung Komunitas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
