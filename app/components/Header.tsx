// Si la imagen está en tu carpeta /public, usa Image de Next.js:
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Chef's Kitchen</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">Welcome, User</span>
        <Image
          src="/user-avatar.jpg"
          alt="User Avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
    </header>
  );
};
