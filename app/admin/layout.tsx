import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Sidebar</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:underline">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Users</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Settings</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;