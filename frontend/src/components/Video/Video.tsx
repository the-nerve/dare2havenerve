import React from 'react';

export const Video: React.FC<VideoProps> = ({ vimeoID }) => {
    return (
        <div className="video">
            <iframe
                title="performance"
                src={`https://player.vimeo.com/video/${vimeoID}`}
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>
    );
};

export interface VideoProps {
    vimeoID: string;
}
