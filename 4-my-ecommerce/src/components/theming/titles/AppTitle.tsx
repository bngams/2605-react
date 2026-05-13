function AppTitle({ title, className = "" } : { title: string; className?: string }) {
  return (
    <h1 className={`text-2xl font-bold  ${className}`}>
      {title}
    </h1>
  );
}
export default AppTitle;