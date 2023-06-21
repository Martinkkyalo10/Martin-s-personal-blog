import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Important Links</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://twitter.com/MartinKyalo2020" className="px-4">
            Twitter
          </Link>
          <Link href="https://www.linkedin.com/in/martin-kyalo-654111239/" className="px-4">
            LinkedIn
          </Link>
          <Link href="https://martinkyalo.com" className="px-4">
            Website
          </Link>
        </div>
        <small>MARTIN &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
