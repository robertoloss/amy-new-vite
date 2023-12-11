

export const picture_section = {
	name: 'picture_section',
	type: 'document',
	title: 'Picture Section',
	fields: [
		{
			name: 'description',
			type: 'string',
			title: 'Description'
		},
		{
			name: 'background_blue',
			type: 'boolean',
			title: 'Background blue? (if not: bg red)'
		},
		{
			name: 'extra_wide',
			type: 'boolean',
			title: 'Extra wide?'
		},
		{
			name: 'height',
			type: 'number',
			title: 'Height in pixels'
		},
		{
			name: 'pictures',
			type: 'array',
			of: [ { type: 'picture' } ]
		}
	]
}
