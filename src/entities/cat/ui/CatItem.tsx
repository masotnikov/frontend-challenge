import React from 'react';
import { CatCard } from '@/shared/types/CatCard';
import { useFavorites } from '@/features/favorites/hooks/useFavorites';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CatItem.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import HeartIcon from '../assets/heart-icon.svg';
import HeartIconActive from '../assets/heart-active.svg';

interface CatItemProps {
  cat: CatCard;
}

export const CatItem: React.FC<CatItemProps> = ({ cat }) => {
  const { favoriteCats, toggleFavorite } = useFavorites();

  const isFavorite = favoriteCats.some((favorite) => favorite.id === cat.id);

  return (
    <div className={classNames(cls.catItem, { [cls.favorite]: isFavorite })}>
      <img
        src={cat.url}
        alt="Cat"
        className={cls.image}
      />
      <Button
        className={classNames(cls.favoriteButton, { [cls.active]: isFavorite })}
        onClick={() => toggleFavorite(cat)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
         {isFavorite ? <HeartIconActive/> : <HeartIcon/>}
      </Button>
    </div>
  );
};
