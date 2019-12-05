import Enrichment from "./Enrichment";

export default class EnrichmentContext {
    public constructor(private _enrichmentService: Enrichment) {}

    public set enrichment(enrichmentService: Enrichment) {
        this._enrichmentService = enrichmentService
    }

    public get enrichment(): Enrichment {
        return this._enrichmentService
    }
}
