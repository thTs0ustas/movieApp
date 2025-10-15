import { toast } from 'sonner';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { HandThumbUpIcon } from '@/components/ui/icons/heroicons-hand-thumb-up';
import {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} from '@/models/movies/services';

interface LikeButton {
  id: string;
  isFavorite: boolean;
}
export const LikeButton = ({ id, isFavorite }: LikeButton) => {
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          onClick={(e) => {
            e.stopPropagation();

            if (!isFavorite)
              addFavorite(id).then(() =>
                toast.info('Added to favorites', { duration: 1000 }),
              );
            else
              removeFavorite(id).then(() =>
                toast.info('Removed from favorites', {
                  duration: 1000,
                }),
              );

            toast.info('Updating favorite status...', {
              duration: 1000,
            });
          }}
          className={`${isFavorite ? 'text-blue-700' : 'text-gray-300'} className="z-20 focus:outline-none" transition-transform hover:scale-110`}>
          <HandThumbUpIcon />
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </TooltipContent>
    </Tooltip>
  );
};
