// Base-64 and ROT13 decoder
const ROT13_API_URL = "https://helloacm.com/api/rot13/?s="; //GET

export default function Decode() {
  const handleDecode = () => {
    console.log("handleDecode button clicked");
    // if ROT13 make API call
    // if base64 do base64 decoding, e.g. const decodedData = window.atob(encodedData);
  };
  return (
    <div>
      <span>Welcome to decoder</span>
      <div>
        <span>Select type</span>
        <br />
        <input
          type="radio"
          id="rot13"
          name="decode-type"
          defaultValue="rot13"
          checked
        />
        <label htmlFor="rot13">ROT13</label>
        <br />
        <input
          type="radio"
          id="base64"
          name="decode-type"
          defaultValue="base64"
        />
        <label htmlFor="base64">Base64</label>
        <br />
        <button onClick={handleDecode}>Decode</button>
      </div>
    </div>
  );
}
