export default function BlogHero({ blog = null }) {
    return (
      <div className="card rounded overflow-hidden border grid grid-cols-8  w-100 bg-slate-700 py-10">
        <div className="col-span-6 md:col-span-4  text-white grid gap-y-1 p-4">
          <div>
            <h2 className="text-3xl italic font-serif font-bold">{blog?.title || "Featured post"}</h2>
           
            <p className="my-3">
              {blog?.excerpt ||
                "This is wider card with supporting text below as natural lead in to additonal content."}
            </p>
          </div>
          <a href="#" className="font-bold">Continue reading...</a>
        </div>
      </div>
    );
  }
  