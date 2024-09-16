interface CreatorObject {
    id: number;
    description: string;
    extent: string;
    qualifier: string;
    role: string;
    biography: string;
    name_in_original_language: string;
    death_year: string;
}

interface NamedDimensionsObject {
    [index: string]: number;
}

interface DimensionsObject {
    [index: string]: NamedDimensionsObject;
}

interface InscriptionObject {
    inscription: string;
    inscription_translation: string;
    inscription_remark: string;
}

interface CurrentExhibitionsObject {
    id: number;
    title: string;
    description: string;
    opening_date: string;
}

interface LegacyExhibitionsObject {
    description: string;
    opening_date: string;
}

interface ExhibitionsObject {
    current: CurrentExhibitionsObject[];
    legacy: LegacyExhibitionsObject[];
}

interface CitationsObject {
    citation: string;
    page_number: string;
    url: string;
}

interface ProvenanceObject {
    description: string;
    citations: CitationsObject[];
    footnotes: string[];
    date: string;
}

interface RelatedWorksObject {
    id: number;
    description: string;
    relationship: string;
}

interface SpecificImageObject {
    url: string;
    width: string;
    height: string;
    filesize: string;
    filename: string;
}

interface ImagesObject {
    date_created?: string;
    annotation?: string;
    web?: SpecificImageObject;
    print?: SpecificImageObject;
    full?: SpecificImageObject;
}

export interface ClevelandArtObject {
    id: number;
    accession_number: string;
    share_license_status: string;
    tombstone: string;
    current_location: string;
    title: string;
    title_in_original_language?: string;
    series?: string;
    series_in_original_language?: string;
    creation_date: string;
    creation_date_earliest: number;
    creation_date_latest: number;
    artist_tags: string[];
    culture: string[];
    creators: CreatorObject[];
    technique: string;
    support_materials: string[];
    department: string;
    collection: string;
    type: string;
    measurements: string;
    dimensions: DimensionsObject;
    state_of_the_work: string;
    edition_of_the_work: string;
    creditline: string;
    copyright: string;
    inscriptions: InscriptionObject[];
    exhibitions: ExhibitionsObject;
    provenance: ProvenanceObject[];
    find_spot: string;
    related_works: RelatedWorksObject[];
    did_you_know: string;
    description: string;
    citations: CitationsObject[];
    catalogue_raisonne: string;
    url: string;
    images: ImagesObject;
    alternate_images: ImagesObject[];
    sketchfab_id: string;
    sketchfab_url: string;
    updated_at: string;
    legal_status: string;
    accession_date: string;
    sortable_date: number;
    date_text: string;
    collapse_artists: boolean;
    on_loan: boolean;
    recently_acquired: boolean;
    record_type: string;
    cover_accession_number: string;
    conservation_statement: string;
    is_nazi_era_provenance: boolean;
    impression: string;
    alternate_titles: string[];
    is_highlight: boolean;
}