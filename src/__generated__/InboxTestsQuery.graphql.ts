/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/* @relayHash aeeb78eb609b596bd6ec4abb3952ee86 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InboxTestsQueryVariables = {};
export type InboxTestsQueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": FragmentRefs<"Inbox_me">;
    } | null;
};
export type InboxTestsQuery = {
    readonly response: InboxTestsQueryResponse;
    readonly variables: InboxTestsQueryVariables;
};



/*
query InboxTestsQuery {
  me {
    ...Inbox_me
    id
  }
}

fragment ActiveLot_lotStanding on AuctionsLotStanding {
  isHighestBidder
  lotState {
    internalID
    bidCount
    reserveStatus
    soldStatus
    askingPrice: onlineAskingPrice {
      display
    }
    sellingPrice: floorSellingPrice {
      display
    }
    id
  }
  saleArtwork {
    ...Lot_saleArtwork
    sale {
      liveStartAt
      id
    }
    id
  }
}

fragment ClosedLot_lotStanding on AuctionsLotStanding {
  isHighestBidder
  lotState {
    internalID
    saleId
    bidCount
    reserveStatus
    soldStatus
    askingPrice: onlineAskingPrice {
      display
    }
    sellingPrice: floorSellingPrice {
      display
    }
    id
  }
  saleArtwork {
    ...Lot_saleArtwork
    sale {
      endAt
      status
      id
    }
    id
  }
}

fragment ConversationSnippet_conversation on Conversation {
  internalID
  to {
    name
    id
  }
  lastMessage
  lastMessageAt
  unread
  items {
    item {
      __typename
      ... on Artwork {
        date
        title
        artistNames
        image {
          url
        }
      }
      ... on Show {
        fair {
          name
          id
        }
        name
        coverImage {
          url
        }
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
  messagesConnection {
    totalCount
  }
}

fragment Conversations_me on Me {
  conversations: conversationsConnection(first: 10, after: "") {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        internalID
        last_message: lastMessage
        ...ConversationSnippet_conversation
        id
        __typename
      }
      cursor
    }
    totalUnreadCount
  }
}

fragment Inbox_me on Me {
  ...Conversations_me
  ...MyBids_me
}

fragment Lot_saleArtwork on SaleArtwork {
  lotLabel
  artwork {
    artistNames
    href
    image {
      url(version: "medium")
    }
    id
  }
}

fragment MyBids_me on Me {
  ...SaleCard_me
  identityVerified
  auctionsLotStandingConnection(first: 25, after: "") {
    edges {
      node {
        ...ActiveLot_lotStanding
        ...ClosedLot_lotStanding
        lotState {
          internalID
          saleId
          soldStatus
          id
        }
        saleArtwork {
          position
          sale {
            ...SaleCard_sale
            internalID
            liveStartAt
            endAt
            status
            id
          }
          id
        }
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment SaleCard_me on Me {
  identityVerified
  pendingIdentityVerification {
    internalID
    id
  }
}

fragment SaleCard_sale on Sale {
  href
  slug
  name
  liveStartAt
  endAt
  coverImage {
    url
  }
  partner {
    name
    id
  }
  registrationStatus {
    qualifiedForBidding
    id
  }
  requireIdentityVerification
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "after",
  "value": ""
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "endCursor",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hasNextPage",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "coverImage",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v12 = [
  (v0/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 25
  }
],
v13 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v17 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Money"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "InboxTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Inbox_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "InboxTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "conversations",
            "args": (v1/*: any*/),
            "concreteType": "ConversationConnection",
            "kind": "LinkedField",
            "name": "conversationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ConversationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Conversation",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": "last_message",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ConversationResponder",
                        "kind": "LinkedField",
                        "name": "to",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastMessageAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "unread",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ConversationItem",
                        "kind": "LinkedField",
                        "name": "items",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "item",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "date",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  (v8/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Image",
                                    "kind": "LinkedField",
                                    "name": "image",
                                    "plural": false,
                                    "selections": (v9/*: any*/),
                                    "storageKey": null
                                  }
                                ],
                                "type": "Artwork",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Fair",
                                    "kind": "LinkedField",
                                    "name": "fair",
                                    "plural": false,
                                    "selections": (v6/*: any*/),
                                    "storageKey": null
                                  },
                                  (v4/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "type": "Show",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/)
                                ],
                                "type": "Node",
                                "abstractKey": "__isNode"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MessageConnection",
                        "kind": "LinkedField",
                        "name": "messagesConnection",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalUnreadCount",
                "storageKey": null
              }
            ],
            "storageKey": "conversationsConnection(after:\"\",first:10)"
          },
          {
            "alias": "conversations",
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Conversations_conversations",
            "kind": "LinkedHandle",
            "name": "conversationsConnection"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identityVerified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IdentityVerification",
            "kind": "LinkedField",
            "name": "pendingIdentityVerification",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "AuctionsLotStandingConnection",
            "kind": "LinkedField",
            "name": "auctionsLotStandingConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "AuctionsLotStandingEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuctionsLotStanding",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isHighestBidder",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionsLotState",
                        "kind": "LinkedField",
                        "name": "lotState",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "bidCount",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "reserveStatus",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "soldStatus",
                            "storageKey": null
                          },
                          {
                            "alias": "askingPrice",
                            "args": null,
                            "concreteType": "Money",
                            "kind": "LinkedField",
                            "name": "onlineAskingPrice",
                            "plural": false,
                            "selections": (v13/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": "sellingPrice",
                            "args": null,
                            "concreteType": "Money",
                            "kind": "LinkedField",
                            "name": "floorSellingPrice",
                            "plural": false,
                            "selections": (v13/*: any*/),
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleId",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "kind": "LinkedField",
                        "name": "saleArtwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lotLabel",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "artwork",
                            "plural": false,
                            "selections": [
                              (v8/*: any*/),
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "medium"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"medium\")"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Sale",
                            "kind": "LinkedField",
                            "name": "sale",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "liveStartAt",
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "endAt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "status",
                                "storageKey": null
                              },
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "slug",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              (v10/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Partner",
                                "kind": "LinkedField",
                                "name": "partner",
                                "plural": false,
                                "selections": (v6/*: any*/),
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Bidder",
                                "kind": "LinkedField",
                                "name": "registrationStatus",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "qualifiedForBidding",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "requireIdentityVerification",
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "position",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AuctionsPageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "auctionsLotStandingConnection(after:\"\",first:25)"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "MyBids_auctionsLotStandingConnection",
            "kind": "LinkedHandle",
            "name": "auctionsLotStandingConnection"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "aeeb78eb609b596bd6ec4abb3952ee86",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.auctionsLotStandingConnection": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "AuctionsLotStandingConnection"
        },
        "me.auctionsLotStandingConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AuctionsLotStandingEdge"
        },
        "me.auctionsLotStandingConnection.edges.cursor": (v15/*: any*/),
        "me.auctionsLotStandingConnection.edges.node": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "AuctionsLotStanding"
        },
        "me.auctionsLotStandingConnection.edges.node.__typename": (v15/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.isHighestBidder": (v17/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "AuctionsLotState"
        },
        "me.auctionsLotStandingConnection.edges.node.lotState.askingPrice": (v18/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.askingPrice.display": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.bidCount": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "me.auctionsLotStandingConnection.edges.node.lotState.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.internalID": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.reserveStatus": {
          "enumValues": [
            "NoReserve",
            "ReserveMet",
            "ReserveNotMet"
          ],
          "nullable": false,
          "plural": false,
          "type": "AuctionsReserveStatus"
        },
        "me.auctionsLotStandingConnection.edges.node.lotState.saleId": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.sellingPrice": (v18/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.sellingPrice.display": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.lotState.soldStatus": {
          "enumValues": [
            "ForSale",
            "Passed",
            "Sold"
          ],
          "nullable": false,
          "plural": false,
          "type": "AuctionsSoldStatus"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork.artistNames": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork.href": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork.image": (v20/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.artwork.image.url": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.lotLabel": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.position": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Float"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.coverImage": (v20/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.coverImage.url": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.endAt": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.href": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.internalID": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.liveStartAt": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.name": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.partner.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.partner.name": (v19/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.registrationStatus": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Bidder"
        },
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.registrationStatus.id": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.registrationStatus.qualifiedForBidding": (v21/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.requireIdentityVerification": (v21/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.slug": (v16/*: any*/),
        "me.auctionsLotStandingConnection.edges.node.saleArtwork.sale.status": (v19/*: any*/),
        "me.auctionsLotStandingConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "AuctionsPageInfo"
        },
        "me.auctionsLotStandingConnection.pageInfo.endCursor": (v19/*: any*/),
        "me.auctionsLotStandingConnection.pageInfo.hasNextPage": (v17/*: any*/),
        "me.conversations": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationConnection"
        },
        "me.conversations.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationEdge"
        },
        "me.conversations.edges.cursor": (v15/*: any*/),
        "me.conversations.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Conversation"
        },
        "me.conversations.edges.node.__typename": (v15/*: any*/),
        "me.conversations.edges.node.id": (v16/*: any*/),
        "me.conversations.edges.node.internalID": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "me.conversations.edges.node.items": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ConversationItem"
        },
        "me.conversations.edges.node.items.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ConversationItemType"
        },
        "me.conversations.edges.node.items.item.__isNode": (v15/*: any*/),
        "me.conversations.edges.node.items.item.__typename": (v15/*: any*/),
        "me.conversations.edges.node.items.item.artistNames": (v19/*: any*/),
        "me.conversations.edges.node.items.item.coverImage": (v20/*: any*/),
        "me.conversations.edges.node.items.item.coverImage.url": (v19/*: any*/),
        "me.conversations.edges.node.items.item.date": (v19/*: any*/),
        "me.conversations.edges.node.items.item.fair": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Fair"
        },
        "me.conversations.edges.node.items.item.fair.id": (v16/*: any*/),
        "me.conversations.edges.node.items.item.fair.name": (v19/*: any*/),
        "me.conversations.edges.node.items.item.id": (v16/*: any*/),
        "me.conversations.edges.node.items.item.image": (v20/*: any*/),
        "me.conversations.edges.node.items.item.image.url": (v19/*: any*/),
        "me.conversations.edges.node.items.item.name": (v19/*: any*/),
        "me.conversations.edges.node.items.item.title": (v19/*: any*/),
        "me.conversations.edges.node.lastMessage": (v19/*: any*/),
        "me.conversations.edges.node.lastMessageAt": (v19/*: any*/),
        "me.conversations.edges.node.last_message": (v19/*: any*/),
        "me.conversations.edges.node.messagesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MessageConnection"
        },
        "me.conversations.edges.node.messagesConnection.totalCount": (v22/*: any*/),
        "me.conversations.edges.node.to": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ConversationResponder"
        },
        "me.conversations.edges.node.to.id": (v16/*: any*/),
        "me.conversations.edges.node.to.name": (v15/*: any*/),
        "me.conversations.edges.node.unread": (v21/*: any*/),
        "me.conversations.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "me.conversations.pageInfo.endCursor": (v19/*: any*/),
        "me.conversations.pageInfo.hasNextPage": (v17/*: any*/),
        "me.conversations.totalUnreadCount": (v22/*: any*/),
        "me.id": (v16/*: any*/),
        "me.identityVerified": (v21/*: any*/),
        "me.pendingIdentityVerification": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "IdentityVerification"
        },
        "me.pendingIdentityVerification.id": (v16/*: any*/),
        "me.pendingIdentityVerification.internalID": (v16/*: any*/)
      }
    },
    "name": "InboxTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();
(node as any).hash = '0664d6807c9c2d53864ad6240891c43f';
export default node;
