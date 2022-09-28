function SidebarContent(props) {
  const { children } = props;
  return (
    <div className="mt-16 w-full max-w-screen-xl md:pl-64">
      <div className="px-4">{children}</div>
    </div>
  );
}

export default SidebarContent;
