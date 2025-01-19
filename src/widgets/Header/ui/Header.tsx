import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import {Link} from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const {className} = props;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className="container">
        <Link className='button' to='/all-cats'>Все котики</Link>
        <Link className='button' to='/favorites'>Любимые котики</Link>
      </div>
    </header>
  );
};

