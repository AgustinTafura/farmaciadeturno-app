import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Event } from "@/types/event";


type cardDataProps = {
  cardData?: Event;
};
export function CalendarCard({cardData}: cardDataProps) {
  const event = cardData
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {event?.pharmacy?.name}
        </Typography>
        <Typography>
          start: {event?.start.date}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}