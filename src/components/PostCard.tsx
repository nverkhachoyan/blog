import type { FC } from "react";
import { ImageCard } from "./Image";

export type PostCardProps = {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImageSrc?: string;
};

export const PostCard: FC<PostCardProps> = (post) => {
  return (
    <li>
      <a
        className="group block no-underline"
        href={`/blog/${post.id}/`}
      >
        <article className="flex gap-6 p-5 rounded-lg transition-all duration-200 hover:bg-white/5">
          {post.heroImageSrc && (
            <div className="w-40 h-28 flex-shrink-0 overflow-hidden rounded-md">
              <ImageCard 
                src={post.heroImageSrc} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-white transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <time 
              dateTime={post.pubDate.toISOString()}
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3"
            >
              {post.pubDate.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            
            {post.description && (
              <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                {post.description}
              </p>
            )}
          </div>
        </article>
      </a>
    </li>
  );
};