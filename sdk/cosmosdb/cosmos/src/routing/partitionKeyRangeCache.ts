import { ClientContext } from "../ClientContext";
import { getIdFromLink } from "../common/helper";
import { createCompleteRoutingMap } from "./CollectionRoutingMapFactory";
import { InMemoryCollectionRoutingMap } from "./inMemoryCollectionRoutingMap";
import { QueryRange } from "./QueryRange";

/** @hidden */
export class PartitionKeyRangeCache {
  private collectionRoutingMapByCollectionId: {
    [key: string]: Promise<InMemoryCollectionRoutingMap>;
  };

  constructor(private clientContext: ClientContext) {
    this.collectionRoutingMapByCollectionId = {};
  }
  /**
   * Finds or Instantiates the requested Collection Routing Map
   * @param {string} collectionLink            - Requested collectionLink
   * @ignore
   */
  public async onCollectionRoutingMap(collectionLink: string): Promise<InMemoryCollectionRoutingMap> {
    const collectionId = getIdFromLink(collectionLink);
    if (this.collectionRoutingMapByCollectionId[collectionId] === undefined) {
      this.collectionRoutingMapByCollectionId[collectionId] = this.requestCollectionRoutingMap(collectionLink);
    }
    return this.collectionRoutingMapByCollectionId[collectionId];
  }

  /**
   * Given the query ranges and a collection, invokes the callback on the list of overlapping partition key ranges
   * @param collectionLink
   * @param queryRanges
   * @ignore
   */
  public async getOverlappingRanges(collectionLink: string, queryRanges: QueryRange) {
    const crm = await this.onCollectionRoutingMap(collectionLink);
    return crm.getOverlappingRanges(queryRanges);
  }

  private async requestCollectionRoutingMap(collectionLink: string) {
    const { resources } = await this.clientContext.queryPartitionKeyRanges(collectionLink).fetchAll();
    return createCompleteRoutingMap(resources.map(r => [r, true]));
  }
}
