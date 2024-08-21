import React from 'react';
import { Link } from 'react-router-dom';

export default function PostStyle3({ title, thumbUrl, category, date, href }) {
  return (
    <div className="cs_post cs_style_3 cs_radius_20 overflow-hidden">
      <Link to={href} className="cs_post_thumb cs_view_mouse">
        <img src={thumbUrl} alt="Post" />
      </Link>
      <div className="cs_post_info">
        <Link to={href} className="cs_post_category">
          {category}
        </Link>
        <h2 className="cs_post_title cs_semibold cs_fs_32">
          <Link to={href}>{title}</Link>
        </h2>
        <div className="cs_posted_by">
          <i>
            <svg
              width={18}
              height={16}
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.474 0.873999H13.362V0.582666C13.362 0.428133 13.2988 0.27993 13.1863 0.170659C13.0737 0.0613878 12.9211 0 12.762 0C12.6029 0 12.4503 0.0613878 12.3377 0.170659C12.2252 0.27993 12.162 0.428133 12.162 0.582666V0.873999H5.838V0.582666C5.838 0.428133 5.77479 0.27993 5.66226 0.170659C5.54974 0.0613878 5.39713 0 5.238 0C5.07887 0 4.92626 0.0613878 4.81374 0.170659C4.70121 0.27993 4.638 0.428133 4.638 0.582666V0.873999H2.526C1.85655 0.875537 1.21497 1.13447 0.741599 1.59417C0.268225 2.05387 0.0015845 2.67691 0 3.32702V13.547C0.0015845 14.1971 0.268225 14.8201 0.741599 15.2798C1.21497 15.7395 1.85655 15.9985 2.526 16H15.474C16.1435 15.9985 16.785 15.7395 17.2584 15.2798C17.7318 14.8201 17.9984 14.1971 18 13.547V3.32702C17.9984 2.67691 17.7318 2.05387 17.2584 1.59417C16.785 1.13447 16.1435 0.875537 15.474 0.873999ZM2.526 2.03933H4.638V2.33066C4.638 2.4852 4.70121 2.6334 4.81374 2.74267C4.92626 2.85194 5.07887 2.91333 5.238 2.91333C5.39713 2.91333 5.54974 2.85194 5.66226 2.74267C5.77479 2.6334 5.838 2.4852 5.838 2.33066V2.03933H12.162V2.33066C12.162 2.4852 12.2252 2.6334 12.3377 2.74267C12.4503 2.85194 12.6029 2.91333 12.762 2.91333C12.9211 2.91333 13.0737 2.85194 13.1863 2.74267C13.2988 2.6334 13.362 2.4852 13.362 2.33066V2.03933H15.474C15.8257 2.03933 16.163 2.175 16.4116 2.41649C16.6603 2.65798 16.8 2.9855 16.8 3.32702V4.70794H1.2V3.32702C1.2 2.9855 1.3397 2.65798 1.58838 2.41649C1.83705 2.175 2.17432 2.03933 2.526 2.03933ZM15.474 14.858H2.526C2.34983 14.858 2.17542 14.8239 2.01296 14.7578C1.85049 14.6916 1.70324 14.5947 1.57979 14.4726C1.45634 14.3506 1.35917 14.2058 1.29396 14.0469C1.22875 13.888 1.19681 13.718 1.2 13.547V5.87327H16.8V13.547C16.8032 13.718 16.7712 13.888 16.706 14.0469C16.6408 14.2058 16.5437 14.3506 16.4202 14.4726C16.2968 14.5947 16.1495 14.6916 15.987 14.7578C15.8246 14.8239 15.6502 14.858 15.474 14.858Z"
                fill="currentColor"
              />
            </svg>
          </i>
          {date}
        </div>
      </div>
    </div>
  );
}
