import { ReactComponent as SuccessIcn } from "./svgs/Icon_Valid.svg";

import "./success-msg.css";
export default function Success() {
  return (
    <div className="success-msg hidden">
      <div className="success-icn">
        <SuccessIcn />
      </div>
      <div className="success-msg-text-wrapper">
        <h3>Your message has been sent.</h3>
        <span>We will be in contact with you within 24 hours.</span>
      </div>
    </div>
  );
}
