import React, {FC} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useGetCatsQuery} from '@/shared/api/baseApi';
import cls from './MainPage.module.scss';
import CatItem from "@/entities/cat/ui/CatItem";


interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
  const { data: cats, isLoading, isError } = useGetCatsQuery();

  if (isLoading) return <div className={cls.loading}>Загрузка...</div>;
  if (isError) return <div className={cls.error}>Ошибка загрузки данных!</div>;

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <ul className={cls.catsList}>
          {cats?.map((cat) => (
            <li key={cat.id}>
              <CatItem cat={cat} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MainPage;
