import { Services } from "../../utils/services";
import { TicketHandler } from "../../components/ticket-handler";

export const ComunicadosTicketHandler = () => {
  return <TicketHandler service={Services.SIEMA_COMUNICADO} />;
};
