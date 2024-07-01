const Jumbotron = () => {
  return (
    <div className="text-[#C9C9C9]">
      <div className="container mx-auto h-[400px] pt-16 lg:pt-28">
        <div className="flex flex-col items-center lg:flex-row flex-2 lg:justify-around lg:pt-0">
          <div className="lg:flex lg:flex-col p-10 h-[400px] flex-2">
            <h2 className="text-1xl">Hi there, I'm Ricko</h2>
            <h2 className="text-6xl font-bold">
              Fullstack Developer
            </h2>
            <h2 className="text-4xl font-bold">from Indonesia</h2>
            <p>welcome to my page</p>
          </div>
          <div className="flex justify-center flex-1 mt-[-100px] lg:mt-0 lg:w-4/6">
            <img
              className="w-9/12 h-fit  object-cover rounded-3xl shadow-lg shadow-slate-500/20"
              src="https://images.unsplash.com/photo-1719066373323-c3712474b2a4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
              alt="ricko"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
