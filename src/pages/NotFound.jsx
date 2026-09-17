const NotFound = () => ( 
  <main
    className="w-dvw h-[calc(100dvh-62px)] flex items-center justify-center flex-col gap-2"
  >
    <h1 className="text-5xl font-ketchup">404</h1>

    <h2 className="text-4xl font-ketchup">Page Not Found</h2>
    
    <p
      className="text-blue-500 transition-all duration-500 hover:underline"
    >
      <a href="/">Go back home</a>
    </p>
  </main>
)


export default NotFound;