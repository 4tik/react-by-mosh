import React from "react";
interface Props {
  text: string;
  maxChars?: number | undefined;
  onClickLess: () => void;
  onClickMore: () => void;
}
const ExpandText = ({ text, maxChars, onClickLess, onClickMore }: Props) => {
  if (maxChars === undefined || text.length <= maxChars)
    return (
      <p>
        {text}{" "}
        <button className="btn btn-sm btn-info" onClick={onClickLess}>
          Less
        </button>
      </p>
    );
  const newText = text.slice(0, maxChars) + "...";
  return (
    <p>
      {newText}
      <button className="btn btn-sm btn-danger" onClick={onClickMore}>
        More
      </button>
    </p>
  );
};

export default ExpandText;
