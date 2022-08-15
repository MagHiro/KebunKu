import FJBNavbar from "./FJBNavbar";
import FJB1 from "./FJB1";
import FJB2 from "./FJB2";
import marketplace from "../../../assets/marketplacehero.svg"
export default function FJB(){
    return(
        <div className="bg-[#F9FAFB]">
        <FJBNavbar />
            <img src={marketplace} alt="" className="max-w-fit w-full mx-auto my-12"/>
        <FJB1 />
        <FJB2 />
        </div>
    )
}