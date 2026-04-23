import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './gallery.css';
import TawkTo from "../../components/TawkTo";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const folder1Images = [
        `${process.env.PUBLIC_URL}/images/1/IMG_2210.JPG`,
        `${process.env.PUBLIC_URL}/images/1/IMG_2211.JPG`,
        `${process.env.PUBLIC_URL}/images/1/IMG_2212.JPG`,
        `${process.env.PUBLIC_URL}/images/1/IMG_2213.JPG`,
    ];

    const folder2Images = [
        `${process.env.PUBLIC_URL}/images/2/IMG_1378.JPG`,
        `${process.env.PUBLIC_URL}/images/2/IMG_1422.JPG`,
    ];

    const folder1_2Images = [
        `${process.env.PUBLIC_URL}/images/1%202/IMG_2210.JPG`,
        `${process.env.PUBLIC_URL}/images/1%202/IMG_2211.JPG`,
        `${process.env.PUBLIC_URL}/images/1%202/IMG_2212.JPG`,
        `${process.env.PUBLIC_URL}/images/1%202/IMG_2213.JPG`,
    ];

    const rndmsImages = [
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-42-56.jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-42-56(1).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-42-56(2).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-42-56(3).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-50-04.jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-50-04(1).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-50-04(2).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-50-04(3).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-57-09.jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-57-10.jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-15-00-47.jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-15-00-47(1).jpg`,
        `${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-15-00-47(2).jpg`,
    ];

    const albums = [
        {
            id: 'SAUCY-SNAPS',
            title: 'SAUCY SNAPS',
            description: 'High-fashion glamour shots',
            cover: folder1Images[0],
            images: folder1Images,
        },
        {
            id: 'ELITE-TEMPTATIONS',
            title: 'ELITE TEMPTATIONS',
            description: 'Elegant and sophisticated portrait collection',
            cover: folder2Images[0],
            images: folder2Images,
        },
        {
            id: 'DESIRE-UNVEILED',
            title: 'DESIRE UNVEILED',
            description: 'Intimate and artistic boudoir photography',
            cover: folder1_2Images[3],
            images: folder1_2Images,
        },
        {
            id: 'THE-SINNERS-SUITE',
            title: 'THE SINNER’S SUITE',
            description: 'Behind-the-scenes moments',
            cover: rndmsImages[0],
            images: rndmsImages,
        },
        // {
        //     id: 'glamour6',
        //     title: 'Glamour',
        //     description: 'High-fashion glamour shots',
        //     cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=6bb7cfc2-33cc-4894-a965-ba7463494582',
        //     images: [
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=6bb7cfc2-33cc-4894-a965-ba7463494582',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g2.jpeg?alt=media&token=fa1a2bde-8dac-496f-9984-5294564fec56',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g3.jpeg?alt=media&token=d663d8a9-7993-4336-9a1d-ad38182afa74',
        //         // Add more images
        //     ]
        // },
        // {
        //     id: 'glamour7',
        //     title: 'Glamour',
        //     description: 'High-fashion glamour shots',
        //     cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t3.jpeg?alt=media&token=e967576c-315d-48b2-9bb4-6a9f2ec7ec5d',
        //     images: [
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t3.jpeg?alt=media&token=e967576c-315d-48b2-9bb4-6a9f2ec7ec5d',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t1.jpeg?alt=media&token=f27081bb-51fa-4ab0-9bdd-358d62c8ec27',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/t2.jpeg?alt=media&token=00a00dc2-ed97-43d7-9ae0-322a3ac63122',
        //         // Add more images
        //     ]
        // },
        // {
        //     id: 'glamour8',
        //     title: 'Glamour',
        //     description: 'High-fashion glamour shots',
        //     cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v1.jpeg?alt=media&token=fb07e648-1152-4a4f-a163-8d364fa854b8',
        //     images: [
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v1.jpeg?alt=media&token=fb07e648-1152-4a4f-a163-8d364fa854b8',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v2.jpeg?alt=media&token=730eacdc-192a-4ab6-8402-cc9f2a0f6c73',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v3.jpeg?alt=media&token=088f03e4-a0f2-4459-bede-a7ee57add781',
        //         'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v4.jpeg?alt=media&token=044a3486-8af5-48b3-98a2-c0cce2e1fcb3',
        //         // Add more images
        //     ]
        // }
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
                <h1>Photo <em>Gallery</em></h1>
                <p className="gallery-description">Collections · Moments · Moods</p>

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
                                    {/*<p>{album.description}</p>*/}
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