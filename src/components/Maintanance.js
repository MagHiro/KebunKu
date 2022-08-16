import logonav from "../assets/logonav.svg";

export default function Maintanance(){
    return (
        <div className="bg-gradient-to-l from-[#05A685] to-[#22C58A] flex items-center justify-center min-h-[100vh]">
            <div className="card font display flex items-center flex-col md:py-48 md:px-72 gap-y-2">
                <img src={logonav} alt="" className='text-white'/>
                <span className="text-[13px] text-primary font-bold">
                  KEBUNKU
                </span>
                <h1 className="text-2xl font-bold">This site under construction</h1>
            </div>
        </div>
    )
}