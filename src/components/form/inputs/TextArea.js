import "./text-area.css";
export default function MessageInput({ handleChange }) {
  return (
    <label className="label">
      <div className="area-title">
        <span>Message</span>
        <span className="max-length">
          Maximum text length is 500 characters
        </span>
      </div>
      <textarea
        className="text-input text-area"
        id="Message"
        onChange={handleChange}
        rows={6}
        maxLength={500}
        required
      />
    </label>
  );
}
