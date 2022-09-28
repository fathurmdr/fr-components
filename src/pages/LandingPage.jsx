import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container fixed bottom-0 top-0 right-0 left-0 mx-auto flex items-center justify-center text-center text-lg">
      <div>
        Welcome to
        <h1 className="my-5 text-4xl font-bold italic">FR Components</h1>
        <Link
          to="docs"
          className="rounded-md border border-slate-600 px-3 py-1 text-base text-slate-600 hover:bg-slate-600 hover:text-white"
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
