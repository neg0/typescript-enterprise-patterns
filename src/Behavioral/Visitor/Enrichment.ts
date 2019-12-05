import Enricher from './Enricher'

export default interface Enrichment {
    accept(enricher: Enricher): void
}
