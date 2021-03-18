import React from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import {
  FiChevronsUp as ChevronUpIcon,
  FiChevronsDown as ChevronDownIcon,
} from "react-icons/fi";
import useKnownWords from "./use-known-words";
import { BsBookmarkCheck as IgnoreIcon } from "react-icons/bs";
import { MdClose as CloseIcon } from "react-icons/md";

export const ShowMore: React.FC<any> = ({ showMore, setShowMore }) => {
  const handleClick = () => setShowMore(!showMore);
  const title = showMore ? "Show less" : "Show more";
  return (
    <IconButton
      icon={<Icon as={showMore ? ChevronUpIcon : ChevronDownIcon} />}
      title={title}
      aria-label={title}
      onClick={handleClick}
    />
  );
};

export const IKnowButton: React.FC<{ text: string }> = ({ text }) => {
  const knownWords = useKnownWords();
  const title = "I know this phrase";
  return (
    <IconButton
      icon={<Icon as={IgnoreIcon} />}
      title={title}
      aria-label={title}
      onClick={() => {
        knownWords.add(text);
      }}
    />
  );
};

export const AppCloseButton: React.FC<any> = ({ style, ...props }) => {
  const title = "Close popup";
  const baseStyle = {
    cursor: "pointer",
    position: "absolute",
    top: 10,
    right: 10,
  };
  const handleClose = () => {
    window.parent.postMessage("LBOOK.CLOSE", "*");
  };
  return (
    <span
      id="btn-close-app"
      title={title}
      aria-label={title}
      style={{ ...baseStyle, ...style }}
      onClick={handleClose}
      {...props}
    >
      <Icon as={CloseIcon} />
    </span>
  );
};
