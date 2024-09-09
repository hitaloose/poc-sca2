import { Services } from "../../utils/services";
import { TicketHandler } from "../../components/ticket-handler";

export const TucandeiraTicketHandler = () => {
  return <TicketHandler service={Services.TUCANDEIRA} />;
};
