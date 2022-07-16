import axios from "axios";
import { toast } from "react-toastify";
import NotificationIcon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import './styles.css'

type Props = {
  saleId: number;
}

function handleClick(id : number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("SMS envido com sucesso!");
  })
}

function NotificationButton({saleId} : Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={NotificationIcon} alt="notificar" />
    </div>
  )
}

export default NotificationButton