import { Services } from "../../utils/services";
import { TicketHandler } from "../../components/ticket-handler";

export const SiemaTicketHandler = () => {
  return <TicketHandler service={Services.SIEMA} />;
};
