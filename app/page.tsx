"use client";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">
          <Header />
          <main>
            <>
              <div className="p-4 font-bold mt-0 border-y-2 border-slate-300">
                Overview
              </div>
              <div className="bg-slate-300 p-4">
                <p className="font-bold mt-4">Upgrade account</p>

                <p className="mt-4">
                  100GB Storage access to Dlex Support experts, Option to add
                  your family, Extra member benefits.
                </p>

                <button className="create-btn bg-blue-500 mt-4 mb-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Upgrade Account
                </button>
              </div>

              <div className="p-4">
                <p className="font-semibold mb-4">Storage overview</p>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm mb-2">Shared files</p>
                    <div className="flex" style={{ width: "1100px" }}>
                      <div className="bg-blue-500 h-4 w-1/3"></div>
                      <div className="bg-slate-300 h-4 w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h1>Storage details</h1>

                <div className="flex gap-4 mt-4">
                  <div className="w-3/12 bg-red-400 h-24">
                    <p className="font-bold ml-2 mt-2">Shared files</p>

                    <p className="ml-2 mt-0">1203 files</p>

                    <p className="font-bold ml-2 mt-2">3.2 GB</p>
                  </div>

                  <div className="w-3/12 bg-red-200 h-24">
                    <p className="font-bold ml-2 mt-2">Shared files</p>

                    <p className="ml-2 mt-0">1203 files</p>

                    <p className="font-bold ml-2 mt-2">3.2 GB</p>
                  </div>

                  <div className="w-3/12 bg-teal-400 h-24">
                    <p className="font-bold ml-2 mt-2">Shared files</p>

                    <p className="ml-2 mt-0">1203 files</p>

                    <p className="font-bold ml-2 mt-2">3.2 GB</p>
                  </div>

                  <div className="w-3/12 bg-teal-200 h-24">
                    <p className="font-bold ml-2 mt-2">Shared files</p>

                    <p className="ml-2 mt-0">1203 files</p>

                    <p className="font-bold ml-2 mt-2">3.2 GB</p>
                  </div>
                </div>

                <div>
                  <p className="font-bold mt-4">Recent files</p>

                  <table className="table-auto w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2">Checkmark</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Members</th>
                        <th className="px-4 py-2">Last modified</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border px-4 py-2 text-center ">
                          Presentation
                        </td>
                        <td className="border px-4 py-2 text-center">
                          Only you
                        </td>
                        <td className="border px-4 py-2 text-center">---</td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border px-4 py-2 text-center ">
                          Design guidelines
                        </td>
                        <td className="border px-4 py-2 text-center">
                          Only you
                        </td>
                        <td className="border px-4 py-2 text-center">
                          November 13 2020
                        </td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border px-4 py-2 text-center ">
                          Resources
                        </td>
                        <td className="border px-4 py-2 text-center">
                          Only you
                        </td>
                        <td className="border px-4 py-2 text-center">---</td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border px-4 py-2 text-center ">
                          Objectives
                        </td>
                        <td className="border px-4 py-2 text-center">
                          Only you
                        </td>
                        <td className="border px-4 py-2 text-center">---</td>
                      </tr>

                      <tr>
                        <td className="border px-4 py-2 text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="border px-4 py-2 text-center ">
                          Screenshot
                        </td>
                        <td className="border px-4 py-2 text-center">
                          Only you
                        </td>
                        <td className="border px-4 py-2 text-center">---</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          </main>
        </div>
      </div>
    </>
  );
}
