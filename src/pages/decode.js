// Base-64 and ROT13 decoder
import { useState, useEffect } from "react";
import axios from "axios";

const ROT13_API_URL = "https://helloacm.com/api/rot13/?s="; //GET

export default function Decode() {
  const [decodeType, setDecodeType] = useState("rot13");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleDecode = async () => {
    console.log("handleDecode button clicked");
    console.log(decodeType);

    if (decodeType === "rot13") {
      // make API call to decode rot13
      try {
        const res = await axios.get(`${ROT13_API_URL}${encodedText}`);
        console.log("rot13 decoded", res.data);
        setDecodedText(res.data);
      } catch (error) {
        console.error("Some error occured while decoding", error);
        setDecodedText("");
      }
    } else if (decodeType === "base64") {
      // do base64 decoding, e.g.const decodedData = window.atob(encodedData);
      const base64DecodedText = window.atob(encodedText);
      console.log("base64 decoded", base64DecodedText);
      setDecodedText(base64DecodedText);
    }
  };
  return (
    <div>
      <span>Welcome to decoder</span>
      <div>
        <span>Select type</span>
        <br />
        <select
          value={decodeType}
          onChange={(e) => setDecodeType(e.target.value)}
        >
          <option value="rot13">ROT13</option>
          <option value="base64">Base64</option>
        </select>
        <br />
        <label>
          Encoded Text:
          <input
            type="text"
            name="encodedText"
            value={encodedText}
            onChange={(e) => setEncodedText(e.target.value)}
          />
        </label>
        <button onClick={handleDecode}>Decode</button>
        <br />
        {decodedText && (
          <>
            <span>Decoded Text is:</span>
            <br />
            <span>{decodedText}</span>
          </>
        )}
      </div>
    </div>
  );
}
