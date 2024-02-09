import { qrCode } from "../assets";
import { Paragraph } from "./atoms";
export default function CodeQR() {
  return (
    <div className="max-w-[290px]  mx-auto bg-white rounded-[28px] p-3 my-custom-shadow">
      <img
        src={qrCode}
        alt="qr-code-to-Frontend-Mentor"
        className="mx-auto w-[260px] h-[260px] object-cover overflow-hidden rounded-2xl"
      />
      <div className="text-center px-2 py-2">
        <h1 className="text-darkBlue pb-3 font-bold font-outfit text-xl">
          Improve your front-end skills by building projects
        </h1>
        <Paragraph>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Paragraph>
      </div>
    </div>
  );
}
