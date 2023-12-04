// UserTable.js

import { useState, useEffect } from "react";
import supabase from "../lib/supabase";
import { useRouter } from "next/router";


export default function UserTable() {

    const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("users").select();

    setUsers(data);
  }

  async function handleEdit(user) {
      router.push({
          pathname: "/editUser",
          query: { id: user.id },
      })
  }
  async function handleDelete(id) {
    await supabase.from("activities").delete().eq("user_id", id);
    // borr
    await supabase.from("users").delete().eq("id", id);
    //refresh page
    fetchUsers();
  }

  async function handleAddUser() {
    router.push("/createUser");
  }

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              City
            </th>
            <th scope="col" class="px-6 py-3">
              Region
            </th>
            <th scope="col" class="px-6 py-3">
              RUT
            </th>
            <th scope="col" class="px-6 py-3">
              Edit
            </th>
            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={user.id}
            >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.id}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.name}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.email}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.role}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.city}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.region}</td></th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"><td>{user.rut}</td></th>

              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(user)}>Edit</button>
              </td>

              <td>
                <button className="btn btn-error" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <button className="btn btn-primary btn-wide" onClick={() => handleAddUser()}>Add User</button>
        </tbody>
      </table>
    </div>
  );
}
