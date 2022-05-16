import { gql } from "@apollo/client";
export const PROMOTION_CONNECTION = gql`
  query Query($where: PromotionWhereInput, $take: Int, $skip: Int) {
    promotionConnection(where: $where, take: $take, skip: $skip) {
      id
      createdAt
      code
      discount
      maxDiscount
      startDate
      endDate
      startTime
      endTime
    }
  }
`;

export const PROMOTION_AGGREGATE = gql`
  query PromotionAggregate($where: PromotionWhereInput) {
    promotionAggregate(where: $where) {
      _count {
        _all
      }
    }
  }
`;

export const CREATE_PROMOTION = gql`
  mutation Mutation($data: PromotionCreateInput!) {
    createPromotion(data: $data) {
      id
      deletedAt
      code
      discount
      maxDiscount
      startDate
      endDate
      startTime
      endTime
    }
  }
`;

export const UPDATE_PROMOTION = gql`
  mutation UpdatePromotion(
    $data: PromotionUpdateInput!
    $where: PromotionWhereUniqueInput!
  ) {
    updatePromotion(data: $data, where: $where) {
      id
      code
      discount
      maxDiscount
      startDate
      endDate
      startTime
      endTime
    }
  }
`;
