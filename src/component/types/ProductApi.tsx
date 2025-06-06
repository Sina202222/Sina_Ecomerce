
// src/types/ProductApi.ts


export interface ProductApi {
        id?: number;
        name_product?: string;   

        category?: string
        brand?: string
        
        description?: string
        price?: number;

        imageUrl?: string;  // آدرس تصویر (اختیاری)
        
    }