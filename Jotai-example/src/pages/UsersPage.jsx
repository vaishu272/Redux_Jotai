import { useAtom } from "jotai";
import { usersAtom } from "../atoms/usersAtom";

const UsersPage = () => {
  const [users] = useAtom(usersAtom);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          👥 Users Directory
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h2 className="font-semibold text-lg">{user.name}</h2>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>

              {/* Info */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>📧 {user.email}</p>
                <p>📞 {user.phone}</p>
                <p>🏢 {user.company.name}</p>
                <p>📍 {user.address.city}</p>
                <p className="text-indigo-600">🌐 {user.website}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
