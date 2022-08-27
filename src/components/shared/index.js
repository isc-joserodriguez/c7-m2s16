import { NotificationManager } from "react-notifications";

export const createNotification = (type, message, title, time = 3000) => {
    console.log('notificacion')
  return () => {
    switch (type) {
      case "info":
        NotificationManager.info(message, title, time);
        break;
      case "success":
        NotificationManager.success(message, title, time);
        break;
      case "warning":
        NotificationManager.warning(message, title, time);
        break;
      case "error":
        NotificationManager.error(message, title, time);
        break;
      default:
        NotificationManager.error(message, title, time);
    }
  };
};
