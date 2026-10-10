import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";

// ================= SIDEBAR MENU =================
let menuitems = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Create Product", link: "/create_product" },
    { name: "Create Category", link: "/create_Category" },
    { name: "View Product", link: "/product_view" },
    { name: "View Category", link: "/categorie_view" },
    { name: "Users", link: "/user_view" },
];

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        let merchant_data = localStorage.getItem("Admin");
        let merchant = JSON.parse(merchant_data);

        fetch(`${BASE_URL}/users?merchant_id=${merchant.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="flex">

            {/* ================= SIDEBAR ================= */}

            <div className="w-64 bg-[#ff6543] shadow-md fixed inset-y-0 ">
                <Link to="/" className="flex items-center justify-center space-y-4">
                    <div
                        className="text-4xl font-bold cursor-pointer text-slate-800 mb-5 mt-5"
                    >
                        SHOP <span className="font-medium">LITE</span>
                    </div>
                </Link>

                <nav className="p-4 space-y-5  text-slate-800 text-white">
                    {menuitems.map((item, index) => (
                        <Link key={index} to={item.link} className="block p-2 hover:text-black rounded font-medium">
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold">View All Users</h3>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded">
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">First Name</th>
                                <th className="border p-2">Last Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2">Password</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="text-center">
                                    <td className="border p-2">{user.first_name}</td>
                                    <td className="border p-2">{user.last_name}</td>
                                    <td className="border p-2">{user.email}</td>
                                    <td className="border p-2">{user.phone}</td>
                                    <td className="border p-2">{user.password}</td>
                                    <td className="border p-2">
                                        <button className="text-red-500 hover:text-red-700">
                                            ❌
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
}

export default Users;