

export const Menu = ({ onMenuItemClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 w-full h-full" id="menu">
     <h1 className="text-3xl font-bold mb-4" id="name">TaQsiim</h1>
      <nav className="w-full flex-grow flex items-center" >
        <div className="flex justify-center w-full">
          <ul className=" space-x-8 text-xl" id="list">
            <li class="btn-31" onClick={() => onMenuItemClick('NewGame')}> <a   class="text-container" className=" font-medium" ><span class="text">New Game</span></a></li>
            <li class="btn-31" onClick={() => onMenuItemClick('projects')}> <a  class="text-container" className=" font-medium" ><span class="text">projects</span></a></li>
            <li class="btn-31" onClick={() => onMenuItemClick('about')}>  <a  class="text-container" className=" font-medium"   ><span class="text">About</span></a></li>
            {/* <li class="btn-31" onClick={() => onMenuItemClick('options')}> <a   class="text-container" className=" font-medium" ><span class="text">options</span></a></li> */}
            <li class="btn-31" onClick={() => onMenuItemClick('contact')}> <a  class="text-container" className=" font-medium" ><span class="text">contact</span></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
