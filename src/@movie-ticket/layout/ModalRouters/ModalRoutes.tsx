import CustomModal from "@movie-ticket/components/ModalRouter";
import { ModalRouteConfig } from "@movie-ticket/routers/models/route.model";
import { ModalRoute } from "react-router-modal";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ModalRoutesProps {
  modals: ModalRouteConfig[];
}
const ModalRoutes = ({
  modals = [],
  match: { path, url },
  location: { search },
}: ModalRoutesProps & RouteComponentProps) => (
  <>
    {modals.map((modal) => {
      
      const {
        component: Component,
        width,
        footer,
        isPathProtected,
        maskClosable,
        headerLess,
        absolutePosition,
      } = modal;
      return (
        <ModalRoute
          key={`${path}${modal.path}`}
          path={`${path}${modal.path}`}
          component={(props: any) => (
            <CustomModal
              {...props}
              width={width}
              footer={footer}
              headerLess={headerLess}
              maskClosable={maskClosable}
              isPathProtected={isPathProtected}
              absolutePosition={absolutePosition}
            >
              <Component {...props} />
            </CustomModal>
          )}
          parentPath={{ pathname: url, search }}
        />
      );
    })}
  </>
);

export default withRouter(ModalRoutes);
