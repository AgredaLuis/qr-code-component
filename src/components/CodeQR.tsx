import { qrCode } from "../assets";
import { Paragraph } from "./atoms";
export default function CodeQR() {
  return (
    <div className="max-w-[360px] m-auto bg-white rounded-2xl p-4 ">
        <img src={qrCode} alt="qr-code-to-Frontend-Mentor" className="mx-auto w-full object-cover rounded-2xl" />
        <div className="text-center px-6 py-[10px]">
          <h2 className="text-darkBlue pb-4 font-bold text-[22px]">
            Improve your front-end skills by building projects
          </h2>
          <Paragraph>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Paragraph>
        </div>
    </div>
  );
}
