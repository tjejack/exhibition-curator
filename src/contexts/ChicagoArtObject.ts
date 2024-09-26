
interface ThumbnailObject {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  }
  
  interface DimensionsObject {
    depth: number;
    width: number;
    height: number;
    diameter: number;
    clarification: string;
  }
  
  interface ColorObject {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
  }
  
  interface AutocompleteObject {
    input: string[];
    weight?: number;
    contexts: AutocompleteContextsObject;
  }
  
  interface AutocompleteContextsObject {
    groupings: string[];
  }
  
  export interface ChicagoArtObject {
    id: number;
    api_model: string;
    api_link: string;
    is_boosted: boolean;
    title: string;
    alt_titles: string[];
    thumbnail: ThumbnailObject;
    main_reference_number: string;
    has_not_been_viewed_much: boolean;
    boost_rank: number;
    date_start: number;
    date_end: number;
    date_display: string;
    date_qualifier_title: string;
    date_qualifier_id: number;
    artist_display: string;
    place_of_origin: string;
    description: string;
    short_description: string;
    dimensions: string;
    dimensions_detail: DimensionsObject[];
    medium_display: string;
    inscriptions: string;
    credit_line: string;
    catalogue_display: string;
    publication_history: string;
    exhibition_history: string;
    provenance_text: string;
    edition: string;
    publishing_verification_level: string;
    internal_department_id: number;
    fiscal_year: number;
    fiscal_year_deaccession: number;
    is_public_domain: boolean;
    is_zoomable: boolean;
    max_zoom_window_size: number;
    copyright_notice: string;
    has_multimedia_resources: boolean;
    has_educational_resources: boolean;
    has_advanced_imaging: boolean;
    colorfulness: number;
    color: ColorObject;
    latitude: number;
    longitude: number;
    latlon: string;
    is_on_view: boolean;
    on_loan_display: string;
    gallery_title: string;
    gallery_id: number;
    nomisma_id: number;
    artwork_type_title: string;
    artwork_type_id: number;
    department_title: string;
    department_id: number;
    artist_id: number;
    artist_title: string;
    alt_artist_ids: string[];
    artist_ids: number[];
    artist_titles: string[];
    category_ids: string[];
    category_titles: string[];
    term_titles: string[];
    style_id: string;
    style_title: string;
    alt_style_ids: string[];
    style_ids: string[];
    style_titles: string[];
    classification_id: string;
    classification_title: string;
    alt_classification_ids: string[];
    classification_ids: string[];
    classification_titles: string[];
    subject_id: string;
    alt_subject_ids: string[];
    subject_ids: string[];
    subject_titles: string[];
    material_id: string;
    alt_material_ids: string[];
    material_ids: string[];
    material_titles: string[];
    technique_id: string;
    alt_technique_ids: string[];
    technique_ids: string[];
    technique_titles: string[];
    theme_titles: string[];
    image_id: string;
    alt_image_ids: string[];
    document_ids: string[];
    sound_ids: string[];
    video_ids: string[];
    text_ids: string[];
    section_ids: string[];
    section_titles: string[];
    site_ids: string[];
    suggest_autocomplete_boosted: string;
    suggest_autocomplete_all: AutocompleteObject[];
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
  }