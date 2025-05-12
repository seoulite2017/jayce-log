import NavMenu from './NavMenu';
import ToggleButton from './ToggleButton';

const Header = () => {
  return (
    <header className="flex-align justify-between fixed w-full h-[60px] px-[10px]">
      <p>JAYCE</p>
      <NavMenu />
      <ToggleButton />
    </header>
  );
};

export default Header;
