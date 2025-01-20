import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import {AppLink} from "@/shared/ui/AppLink/AppLink";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const {className} = props;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <div className="container-header">
        <AppLink />
      </div>
    </header>
  );
};

