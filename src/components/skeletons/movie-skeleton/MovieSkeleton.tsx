export const MovieSkeleton = () => (
  <div className="flex w-full max-w-4xl grow animate-pulse flex-col gap-2 rounded-lg bg-white p-20 md:flex-row">
    <div className="h-[420px] w-[440px] max-w-[640px] grow rounded-lg bg-gray-300 lg:w-[640px]"></div>
    <div className="flex w-full flex-col gap-2">
      <div className="h-6 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      <div className="h-4 w-full rounded bg-gray-300"></div>
      <div className="h-4 w-full rounded bg-gray-300"></div>
      <div className="h-4 w-1/4 rounded bg-gray-300"></div>
    </div>
  </div>
);
