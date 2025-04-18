import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const toggle = () => {
    setLikeStatus(!likeStatus);
    onClick();
  };
  return (
    <div>
      <FaHeart color={likeStatus ? "red" : ""} size={30} onClick={toggle} />
    </div>
  );
};

export default Like;
