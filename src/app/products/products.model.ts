export interface ProductModel {
    title: string;
    keyWords: string;
    description: string;
    imageUrl: string;
    categoryId: string;
    imageId: string;
    type: string;
    variant: Array<VariantModel>;
    subCategoryId?: string;
    filePath?: string;
    sku: string;
    _id?: string;
    status?: boolean;
    productImages: Array<ImageModel>;
    isDealAvailable?: boolean;
    dealId?: string;
    isAddedToCart?: boolean;
    dealPercent?: number;
    dealType?: string;
};

export interface ImageModel {
    filePath: string;
    imageUrl: string;
    imageId: string;
}

export interface VariantModel {
    enable: boolean;
    productStock: number;
    unit: string;
    price: number;
    offerPercent: number;
    isSubScriptionAllowed: boolean,
    subScriptionAmount: number
}
