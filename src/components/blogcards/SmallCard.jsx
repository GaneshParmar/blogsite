export default function SmallCard({ blog = null }) {
  return (
    <div className="card rounded overflow-hidden border grid grid-cols-8 h-56 w-100 max-w-xl">
      <div className="col-span-6 grid gap-y-1 p-4">
        <h4 className="text-green-600 font-semibold">{blog?.tag || "World"}</h4>
        <div>
          <h2 className="text-xl font-bold">{blog?.title || "Featured post"}</h2>
          <p className="text-gray-500">{blog?.date || "Nov 12"}</p>
          <p>
            {blog?.excerpt ||
              "This is wider card with supporting text below as natural lead in to additonal content."}
          </p>
        </div>
        <a href="#" className="text-blue-600">Continue reading</a>
      </div>
      <div className="col-span-2 bg-slate-500 text-white flex items-center justify-center">Thumbnail</div>
    </div>
  );
}
