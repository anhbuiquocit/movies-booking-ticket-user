import { ApolloError } from "@apollo/client";
import { notification } from "antd";
import { ArgsProps, NotificationPlacement } from "antd/lib/notification";

export const popup = {
  success: (description: string): void =>
    notification.success({
      duration: 3,
      message: "Success",
      description,
      // className: 'successNotification',
    }),
  error: (description: unknown): void => {
    if (typeof description === "string") {
      notification.error({
        message: "Error",
        description,
      });
    } else if (description instanceof ApolloError) {
      if (description.networkError) {
        notification.error({
          message: "Error",
          description: "Network error",
        });
      }
      if (description?.graphQLErrors?.length > 0) {
        notification.error({
          message: `Error code： ${description?.graphQLErrors?.[0]?.extensions?.errorCode}`,
          description: description?.graphQLErrors?.[0]?.message,
        });
      }
    } else {
      notification.error({
        message: `Error`,
        description: `Error`,
      });
    }
  },
  info: (description: string): void =>
    notification.info({
      message: "INFO",
      description,
    }),
  warning: (description: string, placement?: NotificationPlacement): void =>
    notification.warning({
      message: "WARNING",
      description,
      placement,
    }),
  open: (config: ArgsProps): void => {
    notification.open(config);
  },
};
