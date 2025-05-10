import { Typography } from "@material-tailwind/react";

type DefaultSkeletonProps = {
  className?: string;
};

export function DefaultSkeleton({ className = "" }: DefaultSkeletonProps) {
  return (
    <div className={`max-w-full animate-pulse ${className}`}>
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-56 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
}
