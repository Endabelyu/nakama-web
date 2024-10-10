import { useLocation } from "react-router-dom";

export const useBreadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const items = paths.map((path, index) => {
    const routeTo = "/" + paths.slice(0, index + 1).join("/");
    const label =
      index === paths.length - 1 ? formatLastSegment(path) : capitalize(path);
    return { label, path: routeTo };
  });
  // Add the "Home" item at the beginning
  return [{ label: "Nakama's", path: "/" }, ...items];
};

// Utility function to capitalize the first letter of a string
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Format the last segment for display (e.g., "one-piece-figurine" to "One Piece Figurine")
const formatLastSegment = (str: string) => {
  return str.split("-").map(capitalize).join(" ");
};
