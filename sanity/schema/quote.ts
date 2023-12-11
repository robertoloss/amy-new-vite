

export const quote = {
	name: 'quote',
	type: 'document',
	title: 'Quote',
	fields: [
		{
			type: 'string',
			name: 'author',
			title: 'Author'
		},
		{
			name: 'quote',
			title: 'Quote',
			type: 'array',
			of: [{type: 'block' }]
		}
	]
}
