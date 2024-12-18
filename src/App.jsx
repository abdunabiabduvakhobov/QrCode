import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "aRhA5SSsru8VYe2/ZsP6Ig==tVUZdHWruJ4ZBPUO"
  }
};

const baseUrl = "https://api.api-ninjas.com/v1/qrcode?format=png&data=";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  const getQrCode = async (e) => {
    e.preventDefault();
    const response = await fetch(baseUrl + inputValue, options);
    const result = await response.text();
    setQrCode(result);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {!qrCode ? (
          <form onSubmit={getQrCode} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700"> QR Code</h2>
            <input
              type="text"
              placeholder="QR Code"
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md "
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md "
            >
              Sent
            </button>
          </form>
        ) : (
          <div className=" text-center">
            <img src={`data:image/png;base64,${qrCode}`} alt="" className="mx-auto" />
            <div className="">
              <a
                href={`data:image/png;base64,${qrCode}`}
                download="QCode.png"
                className=" text-blue-500 hover:underline"
              >
                QrCode-ni yuklab oling
              </a>
              <div>
              <button
                onClick={() => setQrCode("")}
                className=" text-red-500 hover:underline"
              >
                QrCode-ni ochirish
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
