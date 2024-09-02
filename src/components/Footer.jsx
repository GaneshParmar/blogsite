import React from "react";

function Footer() {
  function backToTop() {
    window.scroll({ top: 0, behavior: "smooth" }); // Alternative method
  }

  return (
    <div className="border-t border-white bg-slate-100 text-center py-10 mt-3">
      <p className="text-gray-500">Copyright 2024-25 G@nesh</p>
      <button className="border border-black my-2" onClick={backToTop}>
        Back to top
      </button>
    </div>
  );
}

export default Footer;
