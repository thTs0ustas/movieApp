type MovieCardSkeletonProps = {
  length: number;
};

export const MovieCardsSkeleton = ({ length }: MovieCardSkeletonProps) =>
  Array.from({ length }).map((_, index) => (
    <div
      key={index}
      className="relative my-6 flex w-auto animate-pulse flex-col rounded-lg bg-white shadow-lg sm:w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 px-1 pt-3 pb-2">
        <span className="mb-2 inline-block h-6 w-full rounded bg-gray-300 text-xl font-semibold text-slate-800">
          &nbsp;
        </span>
      </div>

      <div className="p-4">
        <h5 className="inline-block h-4 w-3/4 rounded bg-gray-300 text-sm font-medium text-slate-600">
          &nbsp;
        </h5>
        <p className="mt-2 inline-block h-4 w-full rounded bg-gray-300 text-base leading-normal font-light text-slate-600">
          &nbsp;
        </p>
        <p className="mt-2 inline-block h-4 w-full rounded bg-gray-300 text-base leading-normal font-light text-slate-600">
          &nbsp;
        </p>
      </div>
      <div className="mx-3 border-t border-slate-200 px-1 pt-2 pb-3">
        <span className="inline-block h-4 w-1/4 rounded bg-gray-300 text-sm font-medium text-slate-600">
          &nbsp;
        </span>
      </div>
    </div>
  ));
