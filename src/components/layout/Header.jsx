const Header =() => {
    return (
        <header className='h-8 p-4 flex mb-10'>
        <div className='logo w-8 flex-initial'>
          <img src="../public/vite.svg" />
        </div>
        <div className='w-auto flex-initial ml-12 -mt-4'>
          <ul className='flex '>
            <li className='m-2 p-2'><a>Home</a></li>
            <li className='m-2 p-2'><a>products</a></li>
            <li className='m-2 p-2'><a>cart</a></li>
          </ul>
        </div>
      </header>
    )
}

export default Header;