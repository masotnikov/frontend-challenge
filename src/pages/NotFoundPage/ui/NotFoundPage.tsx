import cls from './NotFoundPage.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {FC} from "react";

interface NotFoundPagesProp {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPagesProp> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};
