export const Footer = () => {
  return (
    <div className="w-full h-16  flex items-center justify-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pinngam Sombutsri. All rights
        reserved.
      </p>
    </div>
  );
};
