// Base-64 and ROT13 decoder
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

const ROT13_API_URL = "https://helloacm.com/api/rot13/?s="; //GET

export default function Decode() {
  const [decodeType, setDecodeType] = useState("rot13");
  const [encodedText, setEncodedText] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleDecode = async () => {
    if (decodeType === "rot13") {
      // make API call to decode rot13
      try {
        const res = await axios.get(`${ROT13_API_URL}${encodedText}`);
        setDecodedText(res.data);
      } catch (error) {
        console.error("Some error occured while decoding", error);
        setDecodedText("");
      }
    } else if (decodeType === "base64") {
      // do base64 decoding
      try {
        const base64DecodedText = window.atob(encodedText);
        setDecodedText(base64DecodedText);
      } catch (error) {
        console.error("Some error occured while decoding", error);
        setDecodedText("");
      }
    }
  };
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Soumya's Decoder</title>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lora"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2 className="mb-3 text-3xl font-semibold header ">
          Welcome to decoder
        </h2>
        <div className="form">
          <h4 className="mb-2 text-xl font-semibold">Select type</h4>
          <div className="form-group">
            <select
              className="form-control"
              value={decodeType}
              onChange={(e) => setDecodeType(e.target.value)}
            >
              <option value="rot13">ROT13</option>
              <option value="base64">Base64</option>
            </select>
          </div>
          <br />
          <label>
            <h4 className="mb-2 text-xl font-semibold">Encoded Text:</h4>
            <input
              className="form-control encoded-input"
              type="text"
              name="encodedText"
              value={encodedText}
              onChange={(e) => setEncodedText(e.target.value)}
            />
          </label>
          <br />
          <button className="btn btn-info" onClick={handleDecode}>
            Decode
          </button>
          <br />
          <br />
          {decodedText && (
            <>
              <h4 className="mb-2 text-xl font-semibold">Decoded Text is:</h4>
              <div className="decoded-text alert alert-secondary">
                {decodedText}
              </div>
              <br />
            </>
          )}

          <span className="text-sm">
            If this helped you, please{" "}
            <a
              className="text-blue-500"
              href="https://coffee.soumya.dev"
              target="_blank"
              rel="noreferrer-noopener"
            >
              support the website
            </a>
            .
          </span>
          <br />
          <Link href="/">
            <a className="text-sm">← Back to soumya.dev</a>
          </Link>
          {/*Add copy to clipboard button*/}
        </div>
      </div>
      <style jsx>{`
        .header {
          margin-top: 10px;
          text-align: center;
        }
        select {
          width: 15%;
        }
        .form {
          padding: 0px 100px;
        }
        .encoded-input {
          width: 210%;
        }
        .btn {
          margin-top: 10px;
        }
        .decoded-text {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
