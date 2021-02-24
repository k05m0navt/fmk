import { Link } from "react-router-dom";

// TODO Change Links
// TODO Maybe add new buttons

function NavBar() {
    return (
        <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="hidden lg:block h-12 w-auto"
                                src="https://i.ibb.co/qWCwyYm/Guess-Logo.png"
                                alt="Workflow"
                            />
                            <div className="flex flex-row pl-5">
                                <p className="text-blue-400 py-2 pr-1 rounded-md text-2xl font-medium">
                                    F
                                </p>
                                <p className="text-yellow-400 py-2 pr-1 rounded-md text-2xl font-medium">
                                    M
                                </p>
                                <p className="text-yellow-800 py-2 rounded-md text-2xl font-medium">
                                    K
                                </p>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/main">
                                    <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                                        Game
                                    </p>
                                </Link>
                                <Link to="/top">
                                    <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                                        Top
                                    </p>
                                </Link>
                                <Link to="/main">
                                    <p className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium">
                                        F.A.Q.
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="flex w-full text-white text-2xl font-medium space-x-4 py-2 justify-end">
                            <p>Innopolis</p>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
