import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function Blog({blog}) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const updateFormattedDate = () => {
            const blogDate = dayjs(blog?.date);
            const now = dayjs();
            const differenceInMinutes = now.diff(blogDate, 'minute');

            let newFormattedDate;
            if (differenceInMinutes === 0) {
                newFormattedDate = 'now';
            } else if (differenceInMinutes < 60) {
                newFormattedDate = `${differenceInMinutes} min ago`;
            }  else {
                newFormattedDate = blogDate.format('MMM D, YYYY'); // "Sep 1, 2024"
            }

            setFormattedDate(newFormattedDate);
        };

        // Update the time immediately
        updateFormattedDate();

        // Set up a timer to update the time every minute
        const timer = setInterval(updateFormattedDate, 60000); // 60,000 ms = 1 min

        // Clear timer on component unmount
        return () => clearInterval(timer);
    }, [blog?.date]); // Re-run effect if blog.date changes


  return (
    <div className="grid mt-10">
        {/* title of the blog */}
        <h1 className="text-2xl md:text-4xl font-bold font-serif">
            {blog?.title || "Title of the blog"}
        </h1>
        <p className="font-semibold text-sm">
            {/* Date of the blog */}
            <span className="text-slate-400">
                {formattedDate}
            </span>
            <span className="mx-1">
                by
            </span>
            <span className="text-blue-600">
                {blog?.author}
            </span>
        </p>
        <p className="my-3" dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </div>
  )
}
