import format from 'date-fns/format';

export default {
    name: 'performance',
    Title: 'Performances',
    type: 'document',
    icon: () => `🎥`,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the performance',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            name: 'releaseDate',
            title: 'Release Date',
            type: 'datetime',
            description: 'The date & time the performance should be released',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the performance',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Main image for the performance',
        },
        {
            name: 'vimeoID',
            title: 'Vimeo Video ID',
            type: 'url',
            description: 'The ID of the the Vimeo video we want to embed',
        },
        {
            name: 'organizations',
            title: 'Organizations',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'organization' }, { type: 'actor' }],
                },
            ],
        },
        {
            name: 'actors',
            title: 'Actors',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'actor' }],
                },
            ],
        },
        {
            name: 'sponsors',
            title: 'Sponsors',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'sponsor' }],
                },
            ],
        },
    ],
    preview: {
        select: {
            name: 'name',
            releaseDate: 'releaseDate',
        },
        prepare: ({ name, releaseDate }) => ({
            title: name,
            subtitle: releaseDate
                ? format(new Date(releaseDate), 'MMM do, h:mm aaaa')
                : 'Release date/time not set',
        }),
    },
    orderings: [
        {
            title: 'by Release Date',
            name: 'releaseDateDesc',
            by: [{ field: 'releaseDate', direction: 'asc' }],
        },
    ],
};
