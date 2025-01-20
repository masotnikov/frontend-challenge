import React, {useState} from 'react';
import {CatCard} from '@/shared/types/CatCard';
import {useFavorites} from '@/features/favorites/hooks/useFavorites';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './CatItem.module.scss';
import {Button} from '@/shared/ui/Button/Button';
import HeartIcon from '../assets/heart-icon.svg';
import HeartIconActive from '../assets/heart-active.svg';

interface CatItemProps {
  cat: CatCard;
}

const CatItem: React.FC<CatItemProps> = ({cat}) => {
  const {favoriteCats, toggleFavorite} = useFavorites();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isFavorite = favoriteCats.some((favorite) => favorite.id === cat.id);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className={classNames(
        cls.catItem,
        {
          [cls.favorite]: isFavorite,
          [cls.loading]: !isImageLoaded
        },
      )}
    >
      {!isImageLoaded && <div className={cls.placeholder}>Loading...</div>} {/* Заглушка */}
      <img
        src={cat.url}
        alt="Cat"
        className={classNames(cls.image, {[cls.hidden]: !isImageLoaded})}
        onLoad={handleImageLoad}
      />
      <Button
        className={classNames(cls.favoriteButton, {[cls.active]: isFavorite})}
        onClick={() => toggleFavorite(cat)}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? <HeartIconActive/> : <HeartIcon/>}
      </Button>
    </div>
  );
};

export default CatItem;
