import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Passwords = ({ passwordArray, deletePassword, editPassword }) => {
  const copyText = (text) => {
    toast.success("🦄 Copired to clipboard", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="password-container mycontainer pt-0">
        <h1 className="font-bold text-xl mb-4">Your Passwords</h1>
        {passwordArray.length === 0 ? (
          <div>No Passwords to Show</div>
        ) : (
          <table className="table-auto w-full rounded-lg overflow-hidden">
            <thead className="bg-green-800 text-white">
              <tr>
                <th>Website URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-white">
                    <div className="flex justify-center items-center gap-3">
                      <a target="_blank" href={item.site}>
                        {item.site}
                      </a>
                      <img
                        src="/images/copy.png"
                        className="copyBtn w-5 cursor-pointer"
                        alt="copy"
                        onClick={() => copyText(item.site)}
                      />{" "}
                    </div>
                  </td>
                  <td className="border border-white">
                    <div className="flex justify-center items-center gap-3">
                      {item.username}{" "}
                      <img
                        src="/images/copy.png"
                        className="copyBtn w-5 cursor-pointer"
                        alt="copy"
                        onClick={() => copyText(item.username)}
                      />{" "}
                    </div>
                  </td>
                  <td className="border border-white">
                    <div className="flex justify-center items-center gap-3">
                      {item.password}
                      <img
                        src="/images/copy.png"
                        className="copyBtn w-5 cursor-pointer"
                        alt="copy"
                        onClick={() => copyText(item.password)}
                      />{" "}
                    </div>
                  </td>
                  <td className="border border-white">
                    <div className="flex justify-center items-center gap-3">
                      <span
                        className="cursor-pointer"
                        onClick={() => deletePassword(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/vlnvqvew.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#c71f16"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => editPassword(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#c71f16"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Passwords;
