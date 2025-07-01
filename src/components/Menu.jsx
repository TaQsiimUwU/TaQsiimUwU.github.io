export const Menu = ({ onMenuItemClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 w-full h-full">
      <h1 className="text-3xl font-bold mb-4">TaQsiim</h1>
      <nav className="w-full flex-grow flex items-center">
        <div className="flex justify-center w-full">
          <ul className=" space-x-8 text-xl">
            <li><a href="#about" className="hover:text-blue-500 font-medium" onClick={() => onMenuItemClick('about')}>About</a></li>
            <li><a href="#projects" className="hover:text-blue-500 font-medium" onClick={() => onMenuItemClick('projects')}>Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 font-medium" onClick={() => onMenuItemClick('contact')}>Contact</a></li>
            <li><a href="#options" className="hover:text-blue-500 font-medium" onClick={() => onMenuItemClick('options')}>Options</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
