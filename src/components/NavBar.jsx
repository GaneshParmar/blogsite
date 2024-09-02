import Button from "../hoc/Button"

function NavBar() {
  const tags = ["World","US","Technology","Design","Culture","Sports","Politics","India","Movie","Style","Travel","Education","Javascript"];
  return (
    <div className="grid py-1">
      <div className="flex justify-between border-b items-center">
          <a href="#" className="text-gray-500">
            Subscribe
          </a>
          <h1 className="text-2xl font-serif font-bold">
            Large
          </h1>
          <div className="p-3 text-sm">
            Search
            <Button className={'bg-white mx-2 rounded-sm border-gray-800 p-0 text-black'}>Sign up</Button>
          </div>
      </div>
      <div className="flex justify-between overflow-x-scroll md:overflow-x-visible text-slate-400 text-sm py-2 gap-3 md:gap-1 mx-2 md:mx-0">
          {tags.map(tag => <p>{tag}</p>)}
      </div>
    </div>
  )
}

export default NavBar