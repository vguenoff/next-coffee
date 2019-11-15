import React from 'react';
import DefaultImage from './DefaultImage';
import FullWidthImage from './FullWidthImage';
import { imageCaptionStyles } from 'styles';

/**
 * Image caption slice component
 */
const ImageCaption = ({ slice }) => (
    <>
        {slice.slice_label === 'image-full-width' ? (
            <FullWidthImage slice={slice} />
        ) : (
            <DefaultImage slice={slice} />
        )}
        <style jsx global>
            {imageCaptionStyles}
        </style>
    </>
);

export default ImageCaption;
