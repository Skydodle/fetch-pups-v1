import React from 'react';
import { Dog } from '../services/api';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Favorite } from '@mui/icons-material';

interface DogCardProps {
  dog: Dog;
  onFavoriteClick?: (id: string) => void;
  favorites?: string[];
}

const DogCard: React.FC<DogCardProps> = ({
  dog,
  onFavoriteClick,
  favorites = [],
}) => {
  const isFavorite = favorites.includes(dog.id);

  return (
    <Card
      raised
      sx={{
        maxWidth: 280,
        minWidth: 268,
        margin: '0 auto 0',
        padding: '0 0.1em',
        borderRadius: 1,
      }}
    >
      <CardMedia
        component='img'
        height='200'
        width='100%'
        image={dog.img}
        alt={dog.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {dog.name}
        </Typography>
        <Typography
          variant='body1'
          color='text.primary'
          sx={{ fontWeight: 400 }}
        >
          Breed: {dog.breed}
        </Typography>
        <Typography
          variant='body1'
          color='text.primary'
          sx={{ fontWeight: 400 }}
        >
          Age: {dog.age} years old
        </Typography>
        <Typography
          variant='body1'
          color='text.primary'
          sx={{ fontWeight: 400 }}
        >
          Location : {dog.zip_code}
        </Typography>
        {onFavoriteClick && (
          <CardActions disableSpacing sx={{ py: 0, pl: 0 }}>
            <IconButton
              aria-label='add to favorites'
              onClick={() => onFavoriteClick(dog.id)}
            >
              {isFavorite ? (
                <Favorite color='error' />
              ) : (
                <FavoriteBorderIcon color='error' />
              )}
            </IconButton>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default DogCard;