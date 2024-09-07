import React from "react";
import { useRef, useState, useEffect } from "react";
import Passwords from "./Passwords";

const Manager = () => {
  const ref = useRef();
  const passRef = useRef();
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]); // stores saved passwords

  // checks previous password stored in local staorage and load it
  useEffect(() => {
    console.log("useeffect");
    const passwords = JSON.parse(localStorage.getItem("passwords"));
    if (passwords) {
      setPasswordArray(passwords);
    }
  }, []);

  //function to hide/unhide password
  const showPassword = () => {
    console.log(passRef.current);
    console.log(ref.current);

    if (ref.current.src.includes("images/eyecross.png")) {
      ref.current.src = "images/eye.png";
      passRef.current.type = "password";
    } else {
      ref.current.src = "images/eyecross.png";
      passRef.current.type = "text";
    }
  };

  // Set the form data
  const handleChange = (event) => {
    console.log("I am clicked");

    setForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  // function to store password in state as well as localStorage
  const savePassword = () => {
    setPasswordArray((prevArray) => [...prevArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form], "pArray"); //state takes time while updating
  };

  return (
    <>
      {/* Background color */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <div className="mycontainer max-w-4xl">
        <div className="logo font-bold text-4xl text-center">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">Box/&gt;</span>
        </div>
        <p className="text-green-600 text-lg text-center">
          Your Own Password Manager Crafted
        </p>
        <div className="flex flex-col gap-6 mt-6">
          <input
            className="rounded-full border border-green-400 w-full px-4 py-1"
            type="text"
            value={form.site}
            onChange={handleChange}
            name="site"
            placeholder="Enter Website Url"
          />
          <div className="flex gap-6">
            <input
              className="rounded-full border border-green-400 w-full px-4 py-1"
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                ref={passRef}
                className="rounded-full border border-green-400 w-full px-4 py-1"
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter Password"
              />
              {}
              <span className="absolute right-1 top-[4px] cursor-pointer">
                <img
                  ref={ref}
                  src="images/eye.png"
                  width={27}
                  alt="eye"
                  onClick={() => showPassword()}
                />
              </span>
            </div>
          </div>
          <button
            className="flex justify-center items-center gap-2 text-white bg-green-500 px-4 py-2 w-fit rounded-full mx-auto border-2 border-green-600 hover:bg-green-400"
            onClick={() => savePassword()}
          >
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>

      <Passwords passwordArray={passwordArray} />
    </>
  );
};

export default Manager;
