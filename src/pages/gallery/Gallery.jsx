import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './gallery.css';
import TawkTo from "../../components/TawkTo";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const albums = [
        {
            id: 'SAUCY-SNAPS',
            title: 'SAUCY SNAPS',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s1.jpeg?alt=media&token=da0cdd27-5270-425e-b04f-d5fd154bde9a',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s2.jpeg?alt=media&token=24757742-c438-4004-bebc-4d4f58b0204b',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s3.jpeg?alt=media&token=80d6c3c5-0ddc-40e8-b347-bd8112de1156',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s4.jpeg?alt=media&token=c3e1515f-1776-457d-afec-aea9595e19e0',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s5.jpeg?alt=media&token=70a3fcdb-ac23-467e-9686-13b66de26b85',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s6.jpeg?alt=media&token=e96f9c61-8c40-4549-a02b-5a7ca91aac5f',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s7.jpeg?alt=media&token=57862396-35e0-4e27-86d0-b9ecf362d205',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s8.jpeg?alt=media&token=3570a006-808f-4c8e-83f9-7c1b09c3cb8f',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s9.jpeg?alt=media&token=78a311cd-1392-4d20-bf7d-e4c5d43dd27d',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/s10.jpeg?alt=media&token=6d00d569-a13d-4056-b9a1-17041e90fd49',
                // Add more images
            ]
        },
        {
            id: 'ELITE-TEMPTATIONS',
            title: 'ELITE TEMPTATIONS',
            description: 'Elegant and sophisticated portrait collection',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v1.jpeg?alt=media&token=dd36a291-d203-4d67-ac86-9a8100796d11',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v2.jpeg?alt=media&token=5c085ed9-8dfc-4945-929e-a57ac926e544',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v3.jpeg?alt=media&token=0d49db05-d0bf-4e4b-8eb5-16bea116d11c',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v4.jpeg?alt=media&token=c750a842-8621-48b3-b96d-2b49fa8dae72',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/v5.jpeg?alt=media&token=f855ef86-4be8-4872-b989-7684e8ad967b'
                // Add more images
            ]
        },
        {
            id: 'DESIRE-UNVEILED',
            title: 'DESIRE UNVEILED',
            description: 'Intimate and artistic boudoir photography',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/vg1.jpeg?alt=media&token=758df22b-7b1a-44b3-9c04-40224cc2d1ed',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/vg1.jpeg?alt=media&token=758df22b-7b1a-44b3-9c04-40224cc2d1ed',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/vg2.jpeg?alt=media&token=0889c89c-5a4c-433a-a383-8d8bad971a39',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/vg3.jpeg?alt=media&token=ca86d921-20d8-4abd-a370-92cf416be0ea',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/vg4.jpeg?alt=media&token=79fa0414-c688-4dd1-9585-1c0fb6c81a92',
                // Add more images
            ]
        },
        {
            id: 'THE-SINNER’S-SUITE',
            title: 'THE SINNER’S SUITE',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/bb1.jpeg?alt=media&token=51a0c4d3-ea82-4d0d-980c-cbb02cb6b3f6',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/bb1.jpeg?alt=media&token=51a0c4d3-ea82-4d0d-980c-cbb02cb6b3f6',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/bb2.jpeg?alt=media&token=cde3b8d2-e8df-4cd2-b23e-fb65877ae9aa',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/bb3.jpeg?alt=media&token=a22ac339-d072-496e-ba50-1828eb54ce77',
                // Add more images
            ]
        },
        {
            id: 'BLUE-LIGHT-REVERIE',
            title: 'BLUE LIGHT REVERIE',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=f814d0c0-4e07-43c2-a003-3af32ba20b48',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g1.jpeg?alt=media&token=f814d0c0-4e07-43c2-a003-3af32ba20b48',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g2.jpeg?alt=media&token=7fd557c3-f623-4a2f-a5f5-f55379e5b992',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/g3.jpeg?alt=media&token=19565c32-1bf3-4bc9-a444-4a10a0520cc3',
                // Add more images
            ]
        },
        {
            id: 'THE-SEDUCTION-SHOWCASE',
            title: 'THE SEDUCTION SHOWCASE',
            description: 'High-fashion glamour shots',
            cover: 'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r1.jpeg?alt=media&token=3494223e-9242-4bb5-b43c-576724f42e8a',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r1.jpeg?alt=media&token=3494223e-9242-4bb5-b43c-576724f42e8a',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r2.jpeg?alt=media&token=488a6bf5-8f16-4f8d-af0d-c34f3254c3cc',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r3.jpeg?alt=media&token=7df6997c-e0cd-41bb-8729-b60fa4c6c258',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r4.jpeg?alt=media&token=27c66a9b-83ec-4ec2-88c0-0d455e2f4b1a',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r5.jpeg?alt=media&token=75fe8d56-69ef-48b8-a4d9-df0f521d84ee',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r6.jpeg?alt=media&token=ea0a3daa-146f-4a67-834b-4f8e796f71bb',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r7.jpeg?alt=media&token=f852e9cd-b278-4f4b-9c81-554d74c54784',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r8.jpeg?alt=media&token=5f678361-1ce0-454b-aca4-9a8f8005bfc7',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r9.jpeg?alt=media&token=80ea70d3-54ae-4113-b038-786fe3cd59bf',
                'https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/r10.jpeg?alt=media&token=45b8594b-ffa7-4278-9a31-193ac8ceec34'

                // Add more images
            ]
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