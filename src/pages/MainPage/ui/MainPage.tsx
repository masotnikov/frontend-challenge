import {FC} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps  {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
   const {className} = props;

    return (
      <div className={classNames(cls.MainPage, {}, [className])}>
        <h2>ALL CATS</h2>
      </div>
    );
};

export default MainPage;

