import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";
function AdminSignup() {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [store_name, setstore_name] = useState("");
    const [descp, setdescp] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!first_name || !last_name || !email || !phone || !store_name || !descp || !password) {
            alert("All fields required");
            setValidate(true)
            return;
        }
       
        const author_obj = {
            first_name,
            last_name,
            email,
            phone,
            store_name,
            descp,
            password,
        };


        fetch(`${BASE_URL}/merchants`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(author_obj)
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            alert("merchant registered");
            console.log(data);
            navigate("/Amin_login");
        }).catch((err) => {
            console.log(err);
            alert("could not fetch");
            console.log(author_obj);
           
        })
    };

    return (
        <div>

            <div className="bg-gray-50 p-10">
                <form className="w-[40%] mx-auto bg-[#ffffff] rounded-xl p-8" onSubmit={handleSubmit}>
                    <div className="text-center mb-5">
                        <h3 className="font-semibold text-3xl mb-2">Create an account</h3>
                        <p className="text-gray-500 font-sm">Signup to begin the journey of creating for everyone to see.</p>
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="border border-[#efefef] p-2 w-full rounded-sm outline-none"
                            placeholder="First name"
                            value={first_name}
                            onChange={(e) => setfirst_name(e.target.value)}
                        />
                        {validate == true && first_name == "" ? <span className="text-sm text-red-700">* First Name Is Required</span> : null}

                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            placeholder="Last Name"
                            value={last_name}
                            onChange={(e) => setlast_name(e.target.value)}
                        />
                        {validate == true && last_name == "" ? <span className="text-sm text-red-700">* Last Name Is Required</span> : null}
                    </div>
                    <div className="mb-2">

                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />{validate == true && email == "" ? <span className="text-sm text-red-700">*Email Address Is Required</span> : null}

                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}

                        />
                        {validate == true && phone == "" ? <span className="text-sm text-red-700">*Phone Number in required</span> : null}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="store_name" className="text-gray-600">
                            Store Name
                        </label>
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={store_name}
                            onChange={(e) => setstore_name(e.target.value)}
                        />
                        {validate == true && store_name == "" ? <span className="text-sm text-red-700">*Store Name required</span> : null}
                    </div>

                    <div className="mb-2">
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            placeholder="Description"
                            value={descp}
                            onChange={(e) => setdescp(e.target.value)}
                        />
                        {validate == true && descp == "" ? <span className="text-sm text-red-700">*Descripton Is required</span> : null}
                    </div>

                    <div className="mb-2">
                        <input
                            type="password"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {validate == true && password == "" ? <span className="text-sm text-red-700">Must include at least 8 characters, an upper and a lowercase character, a number and a special character.</span> : null}
                    </div>
                    <div className="mb-2">
                        <p className="text-gray-500 font-sm">
                            Already have an account{" "}
                            <Link to="/Admin_login" className="text-[#ff6543]">
                                Login
                            </Link>
                        </p>
                    </div>
                    <button className="bg-[#ff6543] text-white py-2 px-6 cursor-pointer rounded-sm">Submit</button>
                </form>
            </div>

        </div>
    );
}

export default AdminSignup;