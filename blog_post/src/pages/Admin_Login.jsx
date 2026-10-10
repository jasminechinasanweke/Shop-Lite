import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

function Login_in() {
    const [email, setemail] = useState("");;
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false)
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("All fields required");
            setValidate(true)
            return;
        }
        const author_obj = {
            email,
            password,
        };
        fetch(`${BASE_URL}/merchants/login`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(author_obj)
        }).then((resp) => {
            return resp.json();
        }).then((data) => {

            if (data.code == 404) {
                alert('An error occurred');
                console.log(data)
            } else {
                alert("merchant Login");
                console.log(data)
                localStorage.setItem("Admin", JSON.stringify(data));
                // navigate("/Dashboard");
            }
        }).catch((err) => {
            console.log(err);
            alert("could not fetch")
        })
    };

    return (
        <div>
            
            <div className="bg-[#ffffff] py-15">
                <form className="w-[40%] mx-auto bg-white rounded-sm p-4" onSubmit={handleSubmit}>
                    <div className="text-center mb-5">
                        <h3 className="font-semibold text-3xl mb-2">Login to your  account</h3>
                        <p className="text-gray-500 font-sm">Login to begin the journey of creating for everyone to see.</p>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="text-gray-600">
                            Email
                        </label>
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        {validate == true && email == "" ? <span className="text-sm text-red-700">* in All fields required</span> : null}
                    </div>


                    <div className="mb-2">
                        <label htmlFor="password" className="text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {validate == true && password == "" ? <span className="text-sm text-red-700">Must include at least 8 characters, an upper and a lowercase character, a number and a special character.</span> : null}
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-500 font-sm">
                            Create an account{" "}
                            <Link to="/Admin" className="text-[#ff6543]">
                                Sing Up
                            </Link>
                        </p>
                    </div>
                    <button className="bg-[#ff6543] text-white py-2 px-6 cursor-pointer rounded-sm">Submit</button>
                </form>
            </div>
          
        </div>
    );
}

export default Login_in;