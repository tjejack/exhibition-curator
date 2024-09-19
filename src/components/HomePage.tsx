export const HomePage = () => {
    return (
      <div id="homepage" className="relative isolate overflow-hidden bg-gradient-to-45 py-24 flex-1 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Welcome!</h2>
            <p className="mt-6 text-lg leading-8 text-black">
            Welcome to SMART Gallery - a virtual art gallery right at your fingertips!
            </p>
            <p className="mt-6 text-md leading-8 text-black">
            To get started, why not head on over to the Explore Art tab on your nav bar?
            </p>
            <p className="mt-6 text-sm leading-8 text-gray-800">
            This project was built by Tj Jack (he/him) for the Tech Returners program.
            </p>
          </div>
        </div>
      </div>
    )
  }