/**
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {boolean} sidePanelOpen - A state boolean
 * @param {string} sidePanelWidth - Size of the side panel. Used to know the margin and width of the main layout
 */
function MainLayout({
  sidePanelOpen = false,
  sidePanelWidth = "w-64",
  children,
  className=""
}) {

  const widthMap = {
    "w-64": {margin: "ml-64", width: "w-[calc(100%-16rem)]"},
    "w-80": {margin: "ml-80", width: "w-[calc(100%-20rem)]"},
    "w-96": {margin: "ml-96", width: "w-[calc(100%-24rem)]"}
  };

  const { margin, width } = sidePanelOpen
    ? widthMap[sidePanelWidth]
    : { margin: "ml-0", width: "w-full" };

  return (
    <div className={`
      relative
      min-h-screen
      ${margin}
      ${width}
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}

export default MainLayout;