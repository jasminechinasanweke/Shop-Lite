import { useState } from "react"
import { Link } from "react-router-dom"
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom"
const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";
function Register() {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false)
    const navigate = useNavigate();


    function submitForm(e) {
    e.preventDefault();

    if (!first_name || !last_name || !email || !phone || !password) {
        alert("All fields required");
        setValidate(true);
        return;
    }

    const user_details = {
        first_name,
        last_name,
        email,
        phone,
        password,
    };

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user_details)
    })
    .then((resp) => resp.json())
    .then((data) => {
        alert("User registered");
        console.log(data);

       

        navigate("/login");
    })
    .catch((err) => {
        console.log(err);
        alert("Error occurred");
    });
}
    return (
        <div>
            <div className="bg-gray-100">
                <div>
                    <Nav />
                </div>
              <div className="bg-gray-50 min-h-dvh py-15">
                <form className="w-[40%] mx-auto bg-white rounded-sm p-4" onSubmit={submitForm}>
                    <div className="text-center mb-5">
                        <h3 className="font-mono text-3xl mb-2">Create an account</h3>
                        <p className="text-gray-500 font-sm">Signup to begin the journey of creating for everyone to see.</p>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="first_name" className="text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={first_name}
                            onChange={(e) => setfirst_name(e.target.value)}
                        />
                        {validate == true && first_name == "" ? <span className="text-sm text-red-700">* in All fields required</span> : null}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Last_name" className="text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={last_name}
                            onChange={(e) => setlast_name(e.target.value)}
                        />
                        {validate == true && last_name == "" ? <span className="text-sm text-red-700">* in All fields required</span> : null}
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
                        />{validate == true && email == "" ? <span className="text-sm text-red-700">* in All fields required</span> : null}

                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone" className="text-gray-600">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="border border-gray-200 p-2 w-full rounded-sm outline-none"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}

                        />
                        {validate == true && phone == "" ? <span className="text-sm text-red-700">* in All fields required</span> : null}
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
                            Already have an account{" "}
                            <Link to="/login" className="text-[#ff6543] font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                    <button className="bg-[#ff6543] text-white py-2 px-6 cursor-pointer rounded-sm">Submit</button>
                </form>
            </div>  
            </div>
        </div>

    )
}

export default Register;