export interface SearchPhotoComponentProps{
    setTerm: (term: string) => void;
}
// ###########
// ###########
// ###########





export interface PhotoListComponentProps {
    photos: object[];
}
// ###########
// ###########
// ###########





export interface ImageCardComponentProps{
    image: {
        id: number;
        urls: {
            full: string; 
            raw: string; 
            regular: string; 
            small: string; 
            small_s3: string; 
            thumb: string;
        }
    }
}
// ###########
// ###########
// ###########




