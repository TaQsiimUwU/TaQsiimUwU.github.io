import { Name } from './Name.jsx';

export const Menu = ({ onMenuItemClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 w-full h-full" id="menu">
      <Name />
      <nav className="w-full flex-grow flex items-center">
        <div className="flex justify-center w-full">
          <ul className="space-x-8 text-xl" id="list">
            <li className="btn-31" onClick={() => onMenuItemClick('Store')}>
              <a className="text-container font-medium">
                <span className="text">Store</span>
              </a>
            </li>
            <li className="btn-31" onClick={() => onMenuItemClick('projects')}>
              <a className="text-container font-medium">
                <span className="text">Projects</span>
              </a>
            </li>
            <li className="btn-31" onClick={() => onMenuItemClick('about')}>
              <a className="text-container font-medium">
                <span className="text">About</span>
              </a>
            </li>
            <li className="btn-31" onClick={() => onMenuItemClick('contact')}>
              <a className="text-container font-medium">
                <span className="text">Contact</span>
              </a>
            </li>
            {/* <li className="btn-31" onClick={() => onMenuItemClick('options')}>
              <a className="text-container font-medium">
                <span className="text">Options</span>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};
