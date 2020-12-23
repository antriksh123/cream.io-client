import LandingPageImg from "./../images/landing_img.jpg";

function Home() {
  return (
    <div className="w-full h-screen container mx-auto p-6">
      <div className="w-full flex items-center justify-between">
        <a className="flex items-center text-red-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl dark:text-red-200" href="#">
          <svg
            className="h-8 fill-current text-red-600 pr-2 dark:text-red-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
          </svg>{" "}
          CREAM.IO
        </a>
      </div>

      <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
		
        {/* Left Col */}
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-red-500 font-bold leading-tight text-center md:text-left slide-in-bottom-h1 dark:text-red-400">Cream.io</h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle text-gray-500 dark:text-gray-200">Making video chatting more accessible for all in these trying times.</p>
        
          <p class="text-red-700 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in dark:text-red-50">Coming Soon!</p>

        </div>
		
        {/* Right Col */}
        <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src={LandingPageImg} />
        </div>
		
        {/* Footer */}
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; Cream.io 2020</a>
        </div>
		
	    </div>
    </div>
  );
}

export default Home;
