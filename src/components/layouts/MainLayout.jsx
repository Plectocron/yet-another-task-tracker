/**
 * @param {boolean} sideBarOpen - A state boolean
 * @param {string} sideBarWidth - Size of the sidebar. Used to know the margin and width of the main layout.
 */
function MainLayout({
  sideBarOpen = false,
  sideBarWidth = "w-64",
  children
}) {

  const widthMap = {
    "w-64": {margin: "ml-64", width: "w-[calc(100%-16rem)]"},
    "w-80": {margin: "ml-80", width: "w-[calc(100%-20rem)]"},
    "w-96": {margin: "ml-96", width: "w-[calc(100%-24rem)]"}
  };

  const { margin, width } = sideBarOpen
    ? widthMap[sideBarWidth]
    : { margin: "ml-0", width: "w-full" };

  return (
    <div className={`
      ${margin}
      ${width}
      transition-all duration-300
    `}>
      {children}
    </div>
  );
}

export default MainLayout;