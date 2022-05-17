import { ReactComponent as Submit } from "./svgs/Icon_Submit.svg";
import { ReactComponent as Loading } from "./svgs/loadingSpinner.svg";
import "./submit-btn.css";
export function SubmitButton() {
  return (
    <button type="submit" className="btn btn-submit">
      <div>
        <div className="unsubmitted">
          <Submit />
          <span>Submit</span>
        </div>
        <div className="loading hidden">
          <Loading />
          <span>Submitting Contact Form...</span>
        </div>
      </div>
    </button>
  );
}
