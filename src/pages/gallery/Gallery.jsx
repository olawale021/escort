import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './gallery.css';

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
            cover: '/api/placeholder/400/500',
            images: [
                '/api/placeholder/400/500',
                '/api/placeholder/400/500',
                '/api/placeholder/400/500',
                // Add more images
            ]
        },
        {
            id: 'glamour',
            title: 'Glamour',
            description: 'High-fashion glamour shots',
            cover: '/api/placeholder/400/500',
            images: [
                '/api/placeholder/400/500',
                '/api/placeholder/400/500',
                '/api/placeholder/400/500',
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