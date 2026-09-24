import { Badge } from "@ui/badge";
import { MapPin } from "lucide-react";


const Places = ({ places, ranked }) => (
  <article className="flex gap-2 items-center">
    <Badge
      variant="secondary"
      className="p-3"
    >
      <MapPin />
      <span>Location</span>
    </Badge>

    <p className="text-sm space-x-2 text-muted-foreground">
      <span>{ places } places</span>
      <span>&middot;</span>
      <span>{ ranked } ranked</span>
    </p>
  </article>
);


export default Places;