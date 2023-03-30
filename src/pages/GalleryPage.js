import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original:'images/gameboy-advance-black-purple.jpg',
        thumbnail:'images/gameboy-advance-black-purple.jpg',
        description:'Re-built black and purple GameBoy Advance.',
        originalHeight:'450px',
    },
    {
        original:'images/gameboy-color-green.jpg',
        thumbnail:'images/gameboy-color-green.jpg',
        description:'Lime Green GameBoy Color',
        originalHeight:'559px',
    },
    {
        original:'images/gameboy-micro-refurb.jpg',
        thumbnail:'images/gameboy-micro-refurb.jpg',
        description:'Refurbished GameBoy Micro',
        originalHeight:'193px',
    },
    {
        original:'images/butterfly-sunflower.jpg',
        thumbnail:'images/butterfly-sunflower.jpg',
        description:'Order Lepidoptera | Family: Pieridae',
        originalHeight:'600px',
    },
    {
        original:'images/cicada-on-plant.jpg',
        thumbnail:'images/cicada-on-plant.jpg',
        description:'Order: Hemiptera | Family: Cicadidae',
        originalHeight:'600px',
    },
    {
        original:'images/harvestmen-tree(1).jpg',
        thumbnail:'images/harvestmen-tree(1).jpg',
        description:'Order: Opiliones | Family: Unknown',
        originalHeight:'600px'
    },
    {
        original:'images/longhorn-beetle.jpg',
        thumbnail:'images/longhorn-beetle.jpg',
        description:'Order: Coleoptera | Family: Cerambycidae',
        originalHeight:'600px',
    },
    {
        original:'images/shiny-blue-beetle-rock(1).jpg',
        thumbnail:'images/shiny-blue-beetle-rock(1).jpg',
        description:'Order: Coleoptera | Family: Chrysomelidae',
        originalHeight:'600px',
    },
    {
        original:'images/sa-table-mountain.jpg',
        thumbnail:'images/sa-table-mountain.jpg',
        description:'Table Mountain in Cape Town, South Africa',
        originalHeight:'450px',
    },
    {
        original:'images/sky-tree-campfire(1).jpg',
        thumbnail:'images/sky-tree-campfire(1).jpg',
        description:'Trees and sky illuminated by a campfire',
        originalHeight:'666px',
    }
]

function GalleryPage() {
    return(
        <>
            <h2>Gallery</h2>
            <p>A variety of images from projects I have done, places I have been to, and arthropods I have found.</p>

            <article className="gallery">
                <ImageGallery items={images}></ImageGallery>
            </article>
        </>
    )
}

export default GalleryPage;