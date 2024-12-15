import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './gallery.css';
import TawkTo from "../../components/TawkTo";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const albums = [
        {
            id: 'portraits',
            title: 'Portraits',
            description: 'Elegant and sophisticated portrait collection',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww4.jpeg?alt=media&token=d657c319-1141-472d-996a-45e7ae804747',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww5.jpeg?alt=media&token=41caaeb9-b608-453b-afa5-0001c60492c1',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww4.jpeg?alt=media&token=d657c319-1141-472d-996a-45e7ae804747',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww6.jpeg?alt=media&token=312c2dd7-887a-4c24-aafc-4d2102b4f46c',
                // Add more images
            ]
        },
        {
            id: 'boudoir',
            title: 'Boudoir',
            description: 'Intimate and artistic boudoir photography',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s1.jpeg?alt=media&token=cb3b87d2-a277-442c-a659-258033d40280',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s1.jpeg?alt=media&token=cb3b87d2-a277-442c-a659-258033d40280',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s2.jpeg?alt=media&token=e9eab1b7-8960-4f03-9e4a-85946c3c8ce7',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s3.jpeg?alt=media&token=0782df9e-dcf2-43e9-a89c-b9a1a8337bef',
                // Add more images
            ]
        },
        {
            id: 'glamour2',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww2.jpeg?alt=media&token=e08af81a-66bd-47ec-b9bb-d7f551bbac68',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww2.jpeg?alt=media&token=e08af81a-66bd-47ec-b9bb-d7f551bbac68',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww3.jpeg?alt=media&token=cd4262e6-082a-4582-ad30-b8ef7c573ed6',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/ww3.jpeg?alt=media&token=cd4262e6-082a-4582-ad30-b8ef7c573ed6',
                // Add more images
            ]
        },
        {
            id: 'glamour3',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r34.jpeg?alt=media&token=570e2cee-a300-4e35-a513-36b1cc14f0f4',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r34.jpeg?alt=media&token=570e2cee-a300-4e35-a513-36b1cc14f0f4',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r35.jpeg?alt=media&token=1a95f336-544f-4756-be93-340bcdde1664',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r36.jpeg?alt=media&token=ad491db9-f5ad-4f7e-8830-b2809fb60751',
                // Add more images
            ]
        },
        {
            id: 'glamour4',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/d1.jpeg?alt=media&token=32812a79-cf75-40fc-b341-b489b12a1396',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/d1.jpeg?alt=media&token=32812a79-cf75-40fc-b341-b489b12a1396',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/d2.jpeg?alt=media&token=57668bda-9dfc-45c2-9b91-78061f5fe6c8',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/d3.jpeg?alt=media&token=a6a82cea-454f-4d20-bb2e-0b477ae80a6d',
                // Add more images
            ]
        },
        {
            id: 'glamour5',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/b1.jpeg?alt=media&token=4f1c6655-6465-4b67-88ff-83b3f1c798ec',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/b1.jpeg?alt=media&token=4f1c6655-6465-4b67-88ff-83b3f1c798ec',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/b2.jpeg?alt=media&token=8db92377-382b-4f1d-83b5-409ae27f4485',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/b3.jpeg?alt=media&token=4f09902a-942c-406c-a903-6aef542ccbe1',
                // Add more images
            ]
        },
        {
            id: 'glamour6',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=6bb7cfc2-33cc-4894-a965-ba7463494582',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=6bb7cfc2-33cc-4894-a965-ba7463494582',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g2.jpeg?alt=media&token=fa1a2bde-8dac-496f-9984-5294564fec56',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g3.jpeg?alt=media&token=d663d8a9-7993-4336-9a1d-ad38182afa74',
                // Add more images
            ]
        },
        {
            id: 'glamour7',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t3.jpeg?alt=media&token=e967576c-315d-48b2-9bb4-6a9f2ec7ec5d',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t3.jpeg?alt=media&token=e967576c-315d-48b2-9bb4-6a9f2ec7ec5d',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t1.jpeg?alt=media&token=f27081bb-51fa-4ab0-9bdd-358d62c8ec27',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t2.jpeg?alt=media&token=00a00dc2-ed97-43d7-9ae0-322a3ac63122',
                // Add more images
            ]
        },
        {
            id: 'glamour8',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v1.jpeg?alt=media&token=fb07e648-1152-4a4f-a163-8d364fa854b8',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v1.jpeg?alt=media&token=fb07e648-1152-4a4f-a163-8d364fa854b8',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v2.jpeg?alt=media&token=730eacdc-192a-4ab6-8402-cc9f2a0f6c73',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v3.jpeg?alt=media&token=088f03e4-a0f2-4459-bede-a7ee57add781',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v4.jpeg?alt=media&token=044a3486-8af5-48b3-98a2-c0cce2e1fcb3',
                // Add more images
            ]
        }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album);
    };

    const handleBackClick = () => {
        setSelectedAlbum(null);
    };

    return (
        <>
            <Navbar />
            <TawkTo />
            <div className="gallery-container">
                <h1>Photo Gallery</h1>
                <p className="gallery-description">
                    Explore my collections through different themes and styles.
                </p>

                {!selectedAlbum ? (
                    <div className="albums-grid">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="album-card"
                                onClick={() => handleAlbumClick(album)}
                            >
                                <div className="album-cover">
                                    <img src={album.cover} alt={album.title} />
                                </div>
                                <div className="album-info">
                                    <h2>{album.title}</h2>
                                    <p>{album.description}</p>
                                    <span className="image-count">{album.images.length} photos</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="album-view">
                        <button className="back-button" onClick={handleBackClick}>
                            ← Back to Albums
                        </button>
                        <h2 className="album-title">{selectedAlbum.title}</h2>
                        <div className="gallery-grid">
                            {selectedAlbum.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="gallery-item"
                                    onClick={() => handleImageClick(image)}
                                >
                                    <img src={image} alt={`${selectedAlbum.title} ${index + 1}`} />
                                    <div className="gallery-item-overlay">
                                        <span>View</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {selectedImage && (
                    <div className="lightbox" onClick={handleCloseLightbox}>
                        <button className="lightbox-close">×</button>
                        <img
                            src={selectedImage}
                            alt="Gallery view"
                            className="lightbox-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;