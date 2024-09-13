import React, { useState, useRef, useEffect } from 'react';

const Manager = () => {
  const ref = useRef();
  const passwordInputRef = useRef(); // Ref to control the password input type
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    // Fetch passwords from localStorage
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords)); // Correctly parse stored passwords
    }
  }, []);

  const showPassword = () => {
    // Toggle the password input type
    if (passwordInputRef.current.type === "password") {
      passwordInputRef.current.type = "text";
      ref.current.src = "/public/img/eye.png"; // Show the "eye" icon
    } else {
      passwordInputRef.current.type = "password";
      ref.current.src = "/public/img/eyecross.png"; // Show the "eye cross" icon
    }
  };

  const savePassword = () => {
    const updatedPasswords = [...passwordArray, form];
    setpasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    setform({ site: "", username: "", password: "" }); // Clear the form after saving
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">Your Own Password Manager</p>
        <div className="text-white flex flex-col items-center p-4 gap-3">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            type="text"
            name="site"
            className="text-black rounded-full border-green-500 border w-full px-4 py-1"
          />
          <div className="flex w-full justify-between gap-3">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              type="text"
              name="username"
              className="text-black rounded-full border-green-500 border w-full px-4 py-1"
            />
            <div className="relative">
              <input
                ref={passwordInputRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                type="password"
                name="password"
                className="text-black rounded-full border-green-500 border w-full px-4 py-1"
              />
              <span
                className="absolute top-[4px] cursor-pointer right-[1px] text-black"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={27}
                  src="/public/img/eyecross.png"
                  alt="Toggle visibility"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="text-black font-bold flex justify-center gap-2 items-center bg-green-500 px-8 py-2 rounded-full w-fit hover:bg-green-300 transition-all duration-500 mt-3 border-2 border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className='font-bold py-4 text-2xl'>Your passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <table className='table-auto w-full overflow-hidden'>
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Passwords</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                <td className='text-center w-32 py-2 border border-white'><a href={item.site} target='_blank'>{item.site}</a></td>
                <td className='text-center w-32 py-2 border border-white'>{item.username}</td>
                <td className='text-center w-32 py-2 border border-white'>{item.password}</td>
              </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
