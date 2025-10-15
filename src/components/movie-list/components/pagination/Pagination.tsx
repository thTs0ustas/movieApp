import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  hasNext?: boolean;
  hasPrev?: boolean;

  setPageIndex: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  hasPrev,
  hasNext,
  setPageIndex,
}: PaginationProps) => {
  return (
    <div className="mt-6 flex w-full items-center justify-center space-x-4">
      <button
        className="w-32 cursor-pointer rounded bg-gray-300 px-4 py-2 text-gray-700 disabled:opacity-50"
        disabled={!hasPrev}
        onClick={() => {
          setPageIndex((prev) => prev - 1);
        }}>
        Previous
      </button>
      <button
        className="w-32 cursor-pointer rounded bg-gray-300 px-4 py-2 text-gray-700 disabled:opacity-50"
        disabled={!hasNext}
        onClick={() => setPageIndex((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
};
