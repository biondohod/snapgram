import { Models } from "appwrite";
import { FC } from "react";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats: FC<PostStatsProps> = ({ post, userId }) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img src="/assets/icons/like.svg" alt="Like" width={20} height={20} className="cursor-pointer" onClick={() => {}}/>
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2">
        <img src="/assets/icons/save.svg" alt="Like" width={20} height={20} className="cursor-pointer" onClick={() => {}}/>
      </div>
    </div>
  );
};

export default PostStats;